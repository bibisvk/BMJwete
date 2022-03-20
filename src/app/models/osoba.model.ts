export class Osoba {
  id?: string;
  meno: string;
  priezvisko: string;

  constructor(osoba: Osoba) {
    this.id = osoba.id;
    this.meno = osoba.meno;
    this.priezvisko = osoba.priezvisko;
  }
}

export class OsobaZoznam {
  id?: string;
  name: string;
  contact: string;

  constructor(osoba: OsobaZoznam) {
    this.id = osoba.id;
    this.name = osoba.name;
    this.contact = osoba.contact;
  }
}
