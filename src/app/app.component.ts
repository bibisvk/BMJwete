import { Component } from '@angular/core';


enum MENU {OSOBY,KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*==================================*/
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

  public nastavMenu(m: MENU){
    this.aktMenu = m;
  }

  /*==================================*/



  /*==================================*/

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
}
