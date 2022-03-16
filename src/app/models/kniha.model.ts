export class Kniha {

  nazov: string;
  autor: string;
  k_id: string;
  pocet: number;

  constructor(kniha: Kniha) {
    this.nazov = kniha.nazov;
    this.autor = kniha.autor;
    this.k_id = kniha.k_id;
    this.pocet = kniha.pocet;
  }

}
