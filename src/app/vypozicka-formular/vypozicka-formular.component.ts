import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vypozicka} from "../models/vypozicka.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vypozicka-formular',
  templateUrl: './vypozicka-formular.component.html',
  styleUrls: ['./vypozicka-formular.component.css']
})
export class VypozickaFormularComponent {


  @Input()
  set vypozicka(data: Vypozicka) {
    if (data) {
      this.naplnForm(data);
    }
  }

  @Output()
  pridajVypozicku = new EventEmitter<Vypozicka>();

  @Output()
  upravVypozicku = new EventEmitter<Vypozicka>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      v_id: new FormControl(null),
      kniha: new FormControl(null),
      pouzivatel: new FormControl(null)
    });
  }

  private naplnForm(vypozicka: Vypozicka): void {
    this.form.controls["v_id"].setValue(vypozicka.v_id);
    this.form.controls["meno"].setValue(vypozicka.kniha);
    this.form.controls["priezvisko"].setValue(vypozicka.pouzivatel);
  }

  public pridaj(): void {
    this.pridajVypozicku.emit({ kniha: this.form.value.kniha, pouzivatel: this.form.value.pouzivatel});
    this.form.reset();
  }

  public uprav(): void {
    this.upravVypozicku.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    // @ts-ignore
    this.vypozicka = undefined;
    this.form.reset();
  }
}
