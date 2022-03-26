export class Vypozicka {

  v_id?: number;
  kniha: string;
  pouzivatel: string;

  constructor(vypozicka: Vypozicka) {
    this.v_id = vypozicka.v_id;
    this.kniha = vypozicka.kniha;
    this.pouzivatel = vypozicka.pouzivatel;
  }

}
export class VypozickaZoznam {
  v_id?: number;
  kniha: string;
  pouzivatel: string;

  constructor(vypozicka: VypozickaZoznam) {
    this.v_id = vypozicka.v_id;
    this.kniha = vypozicka.kniha;
    this.pouzivatel = vypozicka.pouzivatel;
  }
}
