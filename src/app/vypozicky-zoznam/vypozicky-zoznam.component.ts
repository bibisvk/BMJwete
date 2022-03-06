import { Component} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";

@Component({
  selector: 'app-vypozicky-zoznam',
  templateUrl: './vypozicky-zoznam.component.html',
  styleUrls: ['./vypozicky-zoznam.component.css']
})
export class VypozickyZoznamComponent {

  vypozicky: Vypozicka[] = []

  constructor() { }


}
