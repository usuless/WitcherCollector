import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      id: number;
    };
  }
}

export interface RegisterBody {
  login: string;
  password: string;
  mail: string;
}

export interface LoginBody {
  login: string;
  password: string;
}

export interface LoginCheckBody {
  token: string;
}

export interface addCardBody {
  cardId: number;
}

export interface UserParams {
  userId: string;
}
