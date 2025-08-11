export class Estado {
  id: number;
  sigla: string;
  nome: string;
  regiao: RegiaoType;
}

export type RegiaoType = {
  id: number;
  sigla: string;
  nome: string;
};

export class Municipio {
  id: number;
  nome: string;
  microrregiao: Microrregiao;
  'regiao-imediata': RegiaoImediata;
}

export type Microrregiao = {
  id: number;
  nome: string;
  mesorregiao: Mesorregiao;
};

export type Mesorregiao = {
  id: number;
  nome: string;
  UF: Uf;
};

export type Uf = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
};

export type Regiao = {
  id: number;
  sigla: string;
  nome: string;
};

export type RegiaoImediata = {
  id: number;
  nome: string;
  'regiao-intermediaria': RegiaoIntermediaria;
};

export type RegiaoIntermediaria = {
  id: number;
  nome: string;
  UF: Uf2;
};

export type Uf2 = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao2;
};

export type Regiao2 = {
  id: number;
  sigla: string;
  nome: string;
};
