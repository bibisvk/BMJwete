import { Component, OnInit } from '@angular/core';
import {Kniha} from "../models/kniha.model";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  kniha: Kniha = { k_id: 0, nazov: 'kkkk', autor: 'jjjj', pocet: 10 }

  constructor() { }

}
