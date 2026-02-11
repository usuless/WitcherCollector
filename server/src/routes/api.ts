import type { FastifyInstance } from "fastify";

interface addCardBody {
  userId: number;
  cardId: number;
}

export default async function apiRoutes(fastify: FastifyInstance) {
  fastify.get("/cards", async (request, reply) => {
    let client;
    try {
      client = await fastify.pg.connect();
      const { rows } = await client.query(
        "SELECT * FROM gwent_cards ORDER BY id ASC",
      );

      return rows;
    } catch (err) {
      fastify.log.error(err);
      return reply.status(500).send({ error: "Błąd bazy danych" });
    } finally {
      if (client) client.release();
    }
  });

  fastify.post<{ Body: addCardBody }>(
    "/cards/toggle",
    async (request, reply) => {
      const { userId, cardId } = request.body;
      let client;

      try {
        client = await fastify.pg.connect();

        const query = `
      WITH deleted AS (
        DELETE FROM user_cards 
        WHERE user_id = $1 AND card_id = $2 
        RETURNING *
      )
      INSERT INTO user_cards (user_id, card_id)
      SELECT $1, $2
      WHERE NOT EXISTS (SELECT 1 FROM deleted);
    `;

        const result = await client.query(query, [userId, cardId]);

        const isAdded = result.rowCount > 0;

        return {
          status: "success",
          message: isAdded ? "Karta dodana" : "Karta usunięta",
        };
      } catch (err) {
        fastify.log.error(err);
        return reply
          .status(500)
          .send({ status: "error", message: "Błąd bazy danych" });
      } finally {
        if (client) {
          client.release();
        }
      }
    },
  );

  fastify.get("/cards/:userId", async (request, reply) => {
    //@ts-ignore
    const { userId } = request.params;
    let client;

    try {
      client = await fastify.pg.connect();
      const query = `
      SELECT c.id, c.card, c.deck, c.image, uc.acquired_at
      FROM gwent_cards c
      INNER JOIN user_cards uc ON c.id = uc.card_id
      WHERE uc.user_id = $1
      ORDER BY uc.acquired_at DESC
      `;

      const { rows } = await client.query(query, [userId]);
      return rows;
    } catch (err) {
      return reply.status(500).send(err);
    } finally {
      if (client) {
        client.release();
      }
    }
  });

  fastify.post("/cards/:userId/details", async (request, reply) => {
    //@ts-ignore
    const { userId } = request.params;
    let client;

    try {
      client = await fastify.pg.connect();
      const query = `
            SELECT 
                gc.deck, 
                COUNT(*) AS count
            FROM user_cards uc
            JOIN gwent_cards gc ON uc.card_id = gc.id
            WHERE uc.user_id = $1
            GROUP BY gc.deck
            ORDER BY count DESC;
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
  });
}
