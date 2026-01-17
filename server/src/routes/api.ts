import type { FastifyInstance } from "fastify";

export default async function apiRoutes(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return { Hello: "World" };
  });
}
