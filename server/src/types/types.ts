export interface addiction {
  name: string;
  createdAt: string;
  isActive: boolean;
  id: number;
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
