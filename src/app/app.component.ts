import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convert DEC/BIN';
  convertor: FormGroup;

  constructor() {
    this.convertor = new FormGroup({
      dec: new FormControl(),
      b7: new FormControl(),
      b6: new FormControl(),
      b5: new FormControl(),
      b4: new FormControl(),
      b3: new FormControl(),
      b2: new FormControl(),
      b1: new FormControl(),
      b0: new FormControl(),
    })
    this.convertor.controls["dec"].setValue(0);
  }

  public toDec() {
    let value = 0;
    let current = 1;
    for (let i = 0; i < 8; i++) {
      if (this.convertor.controls["b" + i].value) { value += current; }
      current *= 2;
    }
    this.convertor.controls["dec"].setValue(value);
  }

  public toBin() {
    let value = this.convertor.controls["dec"].value;
    let current = 128;
    this.uncheckAll()
    for (let i = 7; i >= 0; i--) {
      if (value >= current) {
        value -= current;
        this.convertor.controls["b" + i].setValue("checked");
      }
      if (value == 0) { break; }
      current /= 2;
    }
  }

  private uncheckAll() {
    for (let i = 0; i < 8; i++) { this.convertor.controls["b" + i].setValue(""); }
  }
}
