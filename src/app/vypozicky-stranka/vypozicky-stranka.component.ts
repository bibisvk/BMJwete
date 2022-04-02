import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Vypozicka, VypozickaZoznam} from "../models/vypozicka.model";
import {VypozickaService} from "../../vypozicka.service";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent implements OnInit{
  vypozicky: VypozickaZoznam[] = [];

  vypozickaNaUpravu?: Vypozicka;

  constructor(private router: Router, private vypozickaService: VypozickaService) { }

  ngOnInit(): void {
    this.refreshVypoziciek();
  }

  refreshVypoziciek(): void {
    this.vypozickaService.getVypozicky().subscribe(data => {
      console.log('prislo:', data);
      this.vypozicky = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vypozicka: Vypozicka): void {
    this.vypozickaService.createVypozicka(vypozicka).subscribe( data => {
      console.log('prislo:', data);
      this.refreshVypoziciek();
    });
  }

  uprav(vypozicka: Vypozicka): void {
    if (vypozicka.id !== undefined) {
      this.vypozickaService.updateVypozicka(vypozicka.id, vypozicka).subscribe(data => {
        console.log('prislo:', data);
        this.refreshVypoziciek();
      });
    }
  }

  upravZoZoznamu(vypozickaId: number): void {
    this.vypozickaService.getVypozicka(vypozickaId).subscribe(data => {
      console.log('prislo:', data);
      this.vypozickaNaUpravu = data;
    });
  }

  zmazZoZoznamu(vypozickaId: number): void {
    this.vypozickaService.deleteVypozicka(vypozickaId).subscribe(data => {
      this.refreshVypoziciek();
    });
  }
}
