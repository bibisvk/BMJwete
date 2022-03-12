import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-osoba-formular',
  templateUrl: './osoba-formular.component.html',
  styleUrls: ['./osoba-formular.component.css']
})
export class OsobaFormularComponent {

  @Input()
  set osoba(data: Osoba) {
    if (data) {
      this.naplnForm(data);
    }
  }


  @Output()
  pridajOsobu = new EventEmitter<Osoba>();

  @Output()
  upravOsobu = new EventEmitter<Osoba>();

  form: FormGroup;

  constructor() {
    this.vytvorForm();
  }

  private vytvorForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null),
      priezvisko: new FormControl(null)
    });
  }

  private naplnForm(osoba: Osoba): void {
    this.form.controls.id.setValue(osoba.id);
    this.form.controls.meno.setValue(osoba.meno);
    this.form.controls.priezvisko.setValue(osoba.priezvisko);
  }

  public pridaj(): void {
    this.pridajOsobu.emit({ id: Math.random().toString(), meno: this.form.value.meno, priezvisko: this.form.value.priezvisko});
    this.form.reset();
  }

  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.osoba = undefined;
    this.form.reset();
  }
}
