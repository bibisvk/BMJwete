import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba-stranka/osoba-stranka.component";
import {KnihaStrankaComponent} from "./kniha-stranka/kniha-stranka.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent
  },
  {
    path: 'kniha',
    component: KnihaStrankaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
