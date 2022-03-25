export class Osoba {
  id?: number;
  meno: string;
  priezvisko: string;

  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
  }
}

export class OsobaZoznam {
  id?: number;
  name: string;
  contact: string;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.name = osoba.name;
    this.contact = osoba.contact;
  }
}
