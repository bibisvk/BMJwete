import { Component } from '@angular/core';
import {Router} from "@angular/router";

enum MENU {OSOBY,KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;
  title: string | undefined;

  constructor(private router: Router) {
  }

  otvorMenu(m: MENU) {
    if (m == MENU.OSOBY) {
      this.router.navigate(['/osoba']);
    }
    if (m == MENU.KNIHY) {
      this.router.navigate(['/kniha']);
    }
    if (m == MENU.VYPOZICKY) {
      this.router.navigate(['/vypozicka']);
    }
  }

  /*==================================
  zobraz = false;

  menu = MENU;
  aktMenu = MENU.OSOBY;

  osoby: any = [];
  osoba = {o_id: "0", meno: "aaa", priezvisko: "bbb"};

  public pridajOsobu(){
    let o2 = {o_id: this.osoba.o_id, meno: this.osoba.meno, priezvisko: this.osoba.priezvisko};
    this.osoby.push(o2);
    this.zobraz = true;
  }



  zobrazKnihu = false;

  knihy: any = [];
  kniha = {k_id: "1", nazov: "abc", autor: "def", pocet: "100"};

  public pridajKnihu(){
    let k = {k_id: this.kniha.k_id, nazov: this.kniha.nazov, autor: this.kniha.autor, pocet: this.kniha.pocet};
    this.knihy.push(k);
    this.zobrazKnihu = true;
  }



  zobrazVypozicku = false;

  vypozicky: any = [];
  vypozicka = {v_id: "", kniha: "", pouzivatel: ""};

  public pridajVypozicku(){
    if( this.vypozicka.v_id && this.vypozicka.kniha && this.vypozicka.pouzivatel) {
      let v = {v_id: this.vypozicka.v_id, kniha: this.vypozicka.kniha, pouzivatel: this.vypozicka.pouzivatel};
      this.vypozicky.push(v);
      this.zobrazVypozicku = true;
    }
  }
  /*==================================*/
}
