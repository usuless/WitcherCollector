import type { FastifyInstance } from "fastify";

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/register", async (request, reply) => {
    return { status: "registered" };
  });
  fastify.get("/", async (request, reply) => {
    return { Hello: "World" };
  });
}
