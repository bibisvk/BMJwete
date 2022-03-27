import {Component, OnInit} from '@angular/core';
import {Kniha, KnihaZoznam} from "../models/kniha.model";
import {Router} from "@angular/router";
import {KnihaServiceService} from "../../kniha-service.service";

@Component({
  selector: 'app-kniha-stranka',
  templateUrl: './kniha-stranka.component.html',
  styleUrls: ['./kniha-stranka.component.css']
})
export class KnihaStrankaComponent implements OnInit{
  knihy: KnihaZoznam[] = [];

  knihaNaUpravu?: Kniha;

  constructor(private router: Router, private knihaService: KnihaServiceService) { }

  ngOnInit(): void {
    this.refreshKnih();
  }

  refreshKnih(): void {
    this.knihaService.getKnihy().subscribe(data => {
      console.log('prislo:', data);
      this.knihy = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(kniha: Kniha): void {
    this.knihaService.createKniha(kniha).subscribe(data => {
      console.log('prislo:', data);
      this.refreshKnih();
    });
  }
  uprav(kniha: Kniha): void {
    if (kniha.k_id !== undefined) {
      this.knihaService.updateKniha(kniha.k_id, kniha).subscribe(data => {
        console.log('prislo:', data);
        this.refreshKnih();
      });
    }
  }

  upravZoZoznamu(knihaId: number): void {
    this.knihaService.getKniha(knihaId).subscribe(data => {
      console.log('prislo:', data);
      this.knihaNaUpravu = data;
    });
  }

  zmazZoZoznamu(knihaId: number): void {
    this.knihaService.deleteKniha(knihaId).subscribe(data => {
      this.refreshKnih();
    });
  }

}
