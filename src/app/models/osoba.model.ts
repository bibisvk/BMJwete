export class Osoba {

  meno: string;
  priezvisko: string;
  o_id: number;

  constructor(osoba: Osoba) {
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
    this.o_id = osoba.o_id;
  }

}
