import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent {

  @Input()
  vypozicky: Vypozicka[] = [];

  @Output()
  upravVypozicku: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazVypozicku: EventEmitter<number> = new EventEmitter<number>();

  uprav(vypozickaId: number): void {
    this.upravVypozicku.emit(vypozickaId);
  }

  zmaz(vypozickaId: number): void {
    this.zmazVypozicku.emit(vypozickaId);
  }
}
