import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Kniha} from "../models/kniha.model";

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

}
