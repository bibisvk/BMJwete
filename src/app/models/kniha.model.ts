export class Kniha {
  k_id?: number;
  nazov: string;
  autor: string;
  pocet: string;

  constructor(kniha: Kniha) {
    this.k_id = kniha.k_id;
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
    this.pocet = kniha.pocet;
  }
}

export class KnihaZoznam {
  id?: number;
  nazov: string;
  autor: string;
  pocet: number;

  constructor(kniha: KnihaZoznam) {
    this.id = kniha.id;
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
    this.pocet = kniha.pocet;
  }
}
