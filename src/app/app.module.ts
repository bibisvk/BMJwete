import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OsobaFormularComponent } from './osoba-formular/osoba-formular.component';
import { OsobaStrankaComponent } from './osoba-stranka/osoba-stranka.component';
import { OsobyZoznamComponent } from './osoby-zoznam/osoby-zoznam.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { KnihaFormularComponent } from './kniha-formular/kniha-formular.component';
import { KnihaStrankaComponent } from './kniha-stranka/kniha-stranka.component';
import { KnihyZoznamComponent } from './knihy-zoznam/knihy-zoznam.component';

@NgModule({
  declarations: [
    AppComponent,
    OsobaFormularComponent,
    OsobaStrankaComponent,
    OsobyZoznamComponent,
    KnihaFormularComponent,
    KnihaStrankaComponent,
    KnihyZoznamComponent
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
