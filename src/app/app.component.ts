import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'Konvertor medzi DEC a BIN ';
  convertor: FormGroup;

  constructor(){
    this.convertor = new FormGroup({

      dec0: new FormControl(),

      bin7: new FormControl(),
      bin6: new FormControl(),
      bin5: new FormControl(),
      bin4: new FormControl(),

      bin3: new FormControl(),
      bin2: new FormControl(),
      bin1: new FormControl(),
      bin0: new FormControl(),
    })

    this.convertor.controls["dec0"].setValue(0);
  }

  private uncheckAll(){
    for (let i = 0; i < 8; i++){
      this.convertor.controls["bin" + i].setValue("");
    }
  }

  public toDec() {
    let value = 0;
    let current = 1;
    for (let i = 0; i < 8; i++) {
      if (this.convertor.controls["bin" + i].value){
        value += current;
      }
      current *= 2;
    }
    this.convertor.controls["dec0"].setValue(value);
  }

  public toBin() {
    let value = this.convertor.controls["dec0"].value;
    let current = 128;
    this.uncheckAll()
    for (let i = 7; i >= 0; i--){
      if (value >= current){
        value -= current;
        this.convertor.controls["bin" + i].setValue("checked");
      }
      if (value == 0) { break; }
      current /= 2;
    }
  }
}
