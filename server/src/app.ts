import Fastify from "fastify";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";
import fastifyPostgres from "@fastify/postgres";
import cors from "@fastify/cors";
import "dotenv/config";
import fastifyJwt from "@fastify/jwt";
import type { FastifyRequest, FastifyReply } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>;
  }
}

export const buildApp = (opts = {}) => {
  const app = Fastify(opts);

  app.register(cors, {
    origin: true,
  });
  const jwtSecret = process.env.JWT_KEY;

  if (!jwtSecret) {
    throw new Error("JWT ERROR!!!!!");
  }

  app.register(fastifyJwt, {
    secret: jwtSecret,
  });

  app.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch (error) {
        reply.send(error);
      }
    },
  );

  app.register(authRoutes, { prefix: "/auth" });
  app.register(apiRoutes, { prefix: "/api" });
  app.register(fastifyPostgres, {
    connectionString: process.env.DATABASE_URL,
  });
  return app;
};
