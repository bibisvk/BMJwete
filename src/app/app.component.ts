import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  dec: any;
  bin: number = 0;
  spolu: number = 0;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      dec: new FormControl(),
      bin: new FormControl(),
      spolu: new FormControl()
    })
  }

  public prepocitaj():void{
    this.spolu = this.dec + this.bin;
  }

}
