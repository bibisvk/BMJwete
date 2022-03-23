export class Kniha {
  k_id?: string;
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
  id?: string;
  name: string;
  contact: string;

  constructor(kniha: KnihaZoznam) {
    this.id = kniha.id;
    this.name = kniha.name;
    this.contact = kniha.contact;
  }
}
