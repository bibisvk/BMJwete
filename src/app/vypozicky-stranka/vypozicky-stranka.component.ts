import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Vypozicka} from "../models/vypozicka.model";
import {VypozickaService} from "../../vypozicka.service";

@Component({
  selector: 'app-vypozicky-stranka',
  templateUrl: './vypozicky-stranka.component.html',
  styleUrls: ['./vypozicky-stranka.component.css']
})
export class VypozickyStrankaComponent implements OnInit{
  vypozicky: Vypozicka[] = [];

  vypozickaNaUpravu?: Vypozicka;

  constructor(private router: Router, private vypozickaService: VypozickaService) { }

  ngOnInit(): void {
    this.vypozickaService.getVypozicky().subscribe(data => {
      console.log('prislo:', data);
      this.vypozicky = data;
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(vypozicka: Vypozicka): void {
    //  this.vypozicky.push(vypozicka);
    this.vypozickaService.createVypozicka(vypozicka).subscribe( data => {
      console.log('prislo:', data);
    });
  }

  uprav(vypozicka: Vypozicka): void {
    const index = this.vypozicky.findIndex(vypozickaArray => vypozickaArray.v_id === vypozicka.v_id);
    if (index !== -1) {
      this.vypozicky[index] = vypozicka;
    }
  }

  upravZoZoznamu(vypozicka: number): void {
    // @ts-ignore
    this.vypozickaNaUpravu = vypozicka;
  }

  zmazZoZoznamu(vypozicka: number): void {
    console.log("VYPOZICKA", vypozicka)
    // @ts-ignore
    if (vypozicka?.v_id) {
      // @ts-ignore
      this.vypozickaService.deleteVypozicka(vypozicka.v_id);
    }
  }
}
