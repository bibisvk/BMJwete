import {Component, Input} from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-knihy-zoznam',
  templateUrl: './knihy-zoznam.component.html',
  styleUrls: ['./knihy-zoznam.component.css']
})
export class KnihyZoznamComponent {

  @Input()
  knihy: Kniha[] = [];

}
