export class Vypozicka {

  v_id?: String;
  kniha: string;
  pouzivatel: string;

  constructor(vypozicka: Vypozicka) {
    this.v_id = vypozicka.v_id;
    this.kniha = vypozicka.kniha;
    this.pouzivatel = vypozicka.pouzivatel;
  }

}
