import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Kniha} from "../models/kniha.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-kniha-formular',
  templateUrl: './kniha-formular.component.html',
  styleUrls: ['./kniha-formular.component.css']
})
export class KnihaFormularComponent {

  @Input()
  set kniha(data: Kniha) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajKnihu = new EventEmitter<Kniha>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      k_id: new FormControl(null),
      nazov: new FormControl(null),
      autor: new FormControl(null),
      pocet: new FormControl(null)
    });
  }

  private naplnForm(kniha: Kniha): void {
    this.form.controls["id"].setValue(kniha.k_id);
    this.form.controls["nazov"].setValue(kniha.nazov);
    this.form.controls["autor"].setValue(kniha.autor);
    this.form.controls["pocet"].setValue(kniha.pocet);
  }

  public pridaj(): void {
    this.pridajKnihu.emit({ k_id: Math.random().toString(), nazov: this.form.value.nazov, autor: this.form.value.autor, pocet: this.form.value.pocet});
    this.form.reset();
  }

}
