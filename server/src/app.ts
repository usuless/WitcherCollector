import Fastify from "fastify";
import authRoutes from "./routes/auth.js";

export const buildApp = (opts = {}) => {
  const app = Fastify(opts);

  app.register(authRoutes, { prefix: "/auth" });

  return app;
};
