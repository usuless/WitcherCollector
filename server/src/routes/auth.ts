import type { FastifyInstance } from "fastify";
import bcrypt from "bcrypt";

interface RegisterBody {
  login: string;
  password: string;
  mail: string;
}

interface LoginBody {
  login: string;
  password: string;
}

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: RegisterBody }>("/register", async (request, reply) => {
    const { login, password, mail } = request.body;

    const query = `
        INSERT INTO users (login, password, mail)
        VALUES ($1, $2, $3)
        RETURNING id, login;
      `;

    if (login.length < 3) {
      return reply.status(400).send({ error: "Login jest za krótki" });
    }

    if (password.length < 5) {
      return reply.status(400).send({ error: "Hasło jest za krótkie" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [login, hashedPassword, mail];
    const result = await fastify.pg.query(query, values);
    return reply
      .status(201)
      .send({ status: "registered", userId: result.rows[0].id });
  });

  fastify.post<{ Body: LoginBody }>("/login", async (request, reply) => {
    const { login, password } = request.body;

    const result = await fastify.pg.query(
      "SELECT * FROM users WHERE login = $1",
      [login],
    );
    const user = result.rows[0];
    const userId = user.id;

    if (!user) {
      return reply.status(401).send({ error: "Nieprawidłowy login lub hasło" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return reply.status(401).send({ error: "Nieprawidłowy login lub hasło" });
    }

    const token = fastify.jwt.sign(
      {
        id: user.id,
        login: user.login,
      },
      { expiresIn: "1h" },
    );

    return { token, userId };
  });
}
