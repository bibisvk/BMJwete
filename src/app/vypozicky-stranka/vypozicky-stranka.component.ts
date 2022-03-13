import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent{
  vypozicky: Vypozicka[] = [];

  vypozickaNaUpravu?: Vypozicka;

  constructor(private router: Router) { }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vypozicka: Vypozicka): void {
     {
      this.vypozicky.push(vypozicka);
    }
  }

  uprav(vypozicka: Vypozicka): void {
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.v_id === vypozicka.v_id);
    if (index !== -1) {
      this.vypozicky[index] = vypozicka;
    }
  }

  upravZoZoznamu(vypozicka: Vypozicka): void {
    this.vypozickaNaUpravu = vypozicka;
  }

  zmazZoZoznamu(vypozicka: Vypozicka): void {
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.v_id === vypozicka.v_id);
    if (index !== -1) {
      this.vypozicky.splice(index, 1);
    }
  }
}
