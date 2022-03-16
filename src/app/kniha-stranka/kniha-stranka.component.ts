import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Kniha} from "../models/kniha.model";
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent{
  knihy: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(kniha: Kniha): void {
    this.knihy.push(kniha);
  }
  uprav(kniha: Kniha): void {
    const index = this.knihy.findIndex(knihaArray => knihaArray.k_id === kniha.k_id);
    if (index !== -1) {
      this.knihy[index] = kniha;
    }
  }

  upravZoZoznamu(kniha: Kniha): void {
    this.knihaNaUpravu = kniha;
  }

  zmazZoZoznamu(kniha: Kniha): void {
    const index = this.knihy.findIndex(knihaArray => knihaArray.k_id === kniha.k_id);
    if (index !== -1) {
      this.knihy.splice(index, 1);
    }
  }

}
