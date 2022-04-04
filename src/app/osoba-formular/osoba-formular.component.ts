import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Osoba} from "../models/osoba.model";
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    this.form = new FormGroup({
      id: new FormControl(null),
      meno: new FormControl(null, Validators.required),
      priezvisko: new FormControl(null, [Validators.minLength(3)])
    });
  }

  private naplnForm(osoba: Osoba): void {
    this.form.controls["id"].setValue(osoba.id);
    this.form.controls["meno"].setValue(osoba.meno);
    this.form.controls["priezvisko"].setValue(osoba.priezvisko);
  }

  public pridaj(): void {
    if(this.form.valid){
      this.pridajOsobu.emit(this.form.value);
      this.form.reset();
    }

  }

  public uprav(): void {
    this.upravOsobu.emit(this.form.value);
    this.form.reset();
  }

  public zrus(): void {
    this.form.reset();
  }

}
