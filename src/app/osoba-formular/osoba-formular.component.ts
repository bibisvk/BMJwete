import { Component, OnInit } from '@angular/core';
import {Osoba} from "../models/osoba.model";

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent {

  osoba: Osoba = { o_id: 0, meno: 'aaa', priezvisko: 'bbb' }

  constructor() { }

}
