import Fastify from "fastify";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";

export const buildApp = (opts = {}) => {
  const app = Fastify(opts);

  app.register(authRoutes, { prefix: "/auth" });
  app.register(apiRoutes, { prefix: "/api" });

  return app;
};
