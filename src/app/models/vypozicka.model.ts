export class Vypozicka {
  id?: number;
  kniha: number;
  pouzivatel: number;

  constructor(vypozicka: Vypozicka) {
    this.id = vypozicka.id;
    this.kniha = vypozicka.kniha;
    this.pouzivatel = vypozicka.pouzivatel;
  }

}
export class VypozickaZoznam {
  borrowingId?: number;
  bookId: number;
  customerId: number;

  constructor(vypozicka: VypozickaZoznam) {
    this.borrowingId = vypozicka.borrowingId;
    this.bookId = vypozicka.bookId;
    this.customerId = vypozicka.customerId;
  }
}
