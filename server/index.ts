import fastify from "fastify";

const server = fastify();

server.get("/ping", async (req, repl) => {
  return "pong\n";
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`server on ${address}`);
});
