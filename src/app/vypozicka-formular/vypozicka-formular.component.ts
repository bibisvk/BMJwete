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
      id: new FormControl(null),
      kniha: new FormControl(null),
      pouzivatel: new FormControl(null)
    });
  }

  private naplnForm(vypozicka: Vypozicka): void {
    this.form.controls["id"].setValue(vypozicka.id);
    this.form.controls["pouzivatel"].setValue(vypozicka.pouzivatel);
    this.form.controls["kniha"].setValue(vypozicka.kniha);
  }

  public pridaj(): void {
    this.pridajVypozicku.emit(this.form.value);
    this.form.reset();
  }

  public uprav(): void {
    this.upravVypozicku.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }
}
