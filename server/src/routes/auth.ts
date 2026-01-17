import type { FastifyInstance } from "fastify";

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/register", async (request, reply) => {
    return { status: "registered" };
  });
}
