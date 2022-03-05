import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
