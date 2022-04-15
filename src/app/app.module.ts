import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';

import {VypozickaFormularComponent} from "./vypozicka-formular/vypozicka-formular.component";
import {VypozickyStrankaComponent} from "./vypozicky-stranka/vypozicky-stranka.component";
import {VypozickyZoznamComponent} from "./vypozicky-zoznam/vypozicky-zoznam.component";

import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobyZoznamComponent } from './osoby-zoznam/osoby-zoznam.component';

import {KnihaFormularComponent} from "./kniha-formular/kniha-formular.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {KnihyZoznamComponent} from "./knihy-zoznam/knihy-zoznam.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobyZoznamComponent,

    KnihaFormularComponent,
    KnihaStrankaComponent,
    KnihyZoznamComponent,

    VypozickaFormularComponent,
    VypozickyStrankaComponent,
    VypozickyZoznamComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
