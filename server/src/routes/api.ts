import type { FastifyInstance } from "fastify";
import type { addCardBody, UserParams } from "../types/types.js";

export default async function apiRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", fastify.authenticate);

  fastify.get("/cards", async (request, reply) => {
    try {
      const query = `
        SELECT id, card, deck, image 
        FROM gwent_cards 
        ORDER BY id ASC
      `;
      const { rows } = await fastify.pg.query(query);

      return rows;
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({
        status: "error",
        message: "Nie udało się pobrać listy kart",
      });
    }
  });

  fastify.post<{ Body: addCardBody }>(
    "/cards/toggle",
    async (request, reply) => {
      const userId = request.user.id;
      const cardId = request.body.cardId;

      try {
        const query = `
        WITH deleted AS (
          DELETE FROM user_cards 
          WHERE user_id = $1 AND card_id = $2 
          RETURNING *
        )
        INSERT INTO user_cards (user_id, card_id)
        SELECT $1, $2
        WHERE NOT EXISTS (SELECT 1 FROM deleted)
        RETURNING card_id; 
      `;

        const { rows } = await fastify.pg.query(query, [userId, cardId]);

        const isAdded = rows.length > 0;

        return {
          status: "success",
          message: isAdded ? "Karta dodana" : "Karta usunięta",
          action: isAdded ? "added" : "removed",
        };
      } catch (err) {
        fastify.log.error(err);
        return reply
          .status(500)
          .send({ status: "error", message: "Błąd bazy danych" });
      }
    },
  );

  fastify.get("/my-cards", async (request, reply) => {
    try {
      const userId = request.user.id;

      const query = `
      SELECT c.id, c.card, c.deck, c.image, uc.acquired_at
      FROM gwent_cards c
      INNER JOIN user_cards uc ON c.id = uc.card_id
      WHERE uc.user_id = $1
      ORDER BY uc.acquired_at DESC
    `;

      const { rows } = await fastify.pg.query(query, [userId]);

      return rows;
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({ error: "Błąd podczas pobierania kart" });
    }
  });

  fastify.post<{ Params: UserParams }>(
    "/cards/details",
    async (request, reply) => {
      const userId = request.user.id;
      let client;

      try {
        client = await fastify.pg.connect();
        const query = `
      SELECT 
          gc.deck, 
          COUNT(uc.card_id) AS owned_count,
          COUNT(gc.id) AS total_count
      FROM gwent_cards gc
      LEFT JOIN user_cards uc ON gc.id = uc.card_id AND uc.user_id = $1
      GROUP BY gc.deck
      ORDER BY owned_count DESC;
`;

        const { rows } = await client.query(query, [userId]);
        return rows;
      } catch (error) {
        return reply.status(500).send(error);
      } finally {
        if (client) {
          client.release();
        }
      }
    },
  );
}
