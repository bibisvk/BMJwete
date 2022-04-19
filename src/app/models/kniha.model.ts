export class Kniha {
  id?: number;
  nazov: string;
  autor: string;
  pocet: string;

  constructor(kniha: Kniha) {
    this.id = kniha.id;
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
    this.pocet = kniha.pocet;
  }
}

export class KnihaZoznam {
  id?: number;
  title: string;
  authorFirstname: string;
  count: number;

  constructor(kniha: KnihaZoznam) {
    this.id = kniha.id;
    this.title = kniha.title;
    this.authorFirstname = kniha.authorFirstname;
    this.count = kniha.count;
  }
}
