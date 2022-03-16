import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {

  @Input()
  knihy: Kniha[] = [];

  @Output()
  upravKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  @Output()
  zmazKnihu: EventEmitter<Kniha> = new EventEmitter<Kniha>();

  uprav(kniha: Kniha): void {
    this.upravKnihu.emit(kniha);
  }

  zmaz(kniha: Kniha): void {
    this.zmazKnihu.emit(kniha);
  }

}
