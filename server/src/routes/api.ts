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

  fastify.post<{ Body: addCardBody }>("/add", async (request, reply) => {
    const { userId, cardId } = request.body;
    let client;

    try {
      client = await fastify.pg.connect();
      await client.query(
        "INSERT INTO user_cards (user_id, card_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
        [userId, cardId],
      );
      return { status: "success", message: "Karta dodana do kolekcji" };
    } catch (err) {
      return reply.status(500).send(err);
    } finally {
      if (client) client.release();
    }
  });

  fastify.get("/collection/:userId", async (request, reply) => {
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
      if (client) client.release();
    }
  });
}
