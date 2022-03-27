import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KnihaZoznam} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {

  @Input()
  knihy: KnihaZoznam[] = [];

  @Output()
  upravKnihu: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  zmazKnihu: EventEmitter<number> = new EventEmitter<number>();

  uprav(knihaId: number): void {
    this.upravKnihu.emit(knihaId);
  }

  zmaz(knihaId: number): void {
    this.zmazKnihu.emit(knihaId);
  }

}
