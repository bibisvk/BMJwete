import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Kniha} from "../models/kniha.model";
import {KnihaServiceService} from "../../kniha-service.service";


@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent{
  knihy: Kniha[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private knihaService: KnihaServiceService) { }

  ngOnInit(): void {
    this.refreshKnih();
  }

  refreshKnih(): void {
    this.knihaService.getKnihy().subscribe(data => {
      console.log('prislo:', data);
      this.knihy = [];
      for (const d of data) {
        this.knihy.push({ k_id: d.id, nazov: d.name, autor: d.name, pocet: d.name});
      }
    });
  }

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
