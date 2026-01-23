import type { FastifyInstance } from "fastify";

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
}
