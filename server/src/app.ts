import Fastify from "fastify";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";
import fastifyPostgres from "@fastify/postgres";

export const buildApp = (opts = {}) => {
  const app = Fastify(opts);

  app.register(authRoutes, { prefix: "/auth" });
  app.register(apiRoutes, { prefix: "/api" });
  app.register(fastifyPostgres, {
    connectionString: "postgres://postgres:5173@localhost:5432/Witcher",
  });
  return app;
};
