import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OsobaZoznam} from "../models/osoba.model";

@Component({
  selector: 'app-osoby-zoznam',
  templateUrl: './osoby-zoznam.component.html',
  styleUrls: ['./osoby-zoznam.component.css']
})
export class OsobyZoznamComponent {

  @Input()
  osoby: OsobaZoznam[] = [];

  @Output()
  upravOsobu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazOsobu: EventEmitter<number> = new EventEmitter<number>();

  uprav(osobaId: number): void {
    this.upravOsobu.emit(osobaId);
  }

  zmaz(osobaId: number): void {
    this.zmazOsobu.emit(osobaId);
  }
}
