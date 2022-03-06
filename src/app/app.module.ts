import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobyZoznamComponent } from './osoby-zoznam/osoby-zoznam.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {VypozickaFormularComponent} from "./vypozicka-formular/vypozicka-formular.component";
import {VypozickyStrankaComponent} from "./vypozicky-stranka/vypozicky-stranka.component";
import {VypozickyZoznamComponent} from "./vypozicky-zoznam/vypozicky-zoznam.component";

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobyZoznamComponent,

    VypozickaFormularComponent,
    VypozickyStrankaComponent,
    VypozickyZoznamComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
