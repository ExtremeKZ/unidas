import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InicialComponent} from "./inicial/inicial.component";
import {AdminComponent} from "./admin.component";
import {ImoveisComponent} from "./imoveis/imoveis.component";
import {NovoimovelComponent} from "./novoimovel/novoimovel.component";

import {FormCanDeactivateGuard} from "../../guard/form-can-deactivate.guard";
import {EditarimovelComponent} from "./editarimovel/editarimovel.component";
import {ImovelResolver} from "../../guard/imovel.resolver";

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    {path: '', component: InicialComponent},
    {path: 'imoveis', component: ImoveisComponent, resolve: {imovel: ImovelResolver}},
    {path: 'novoimovel', component: NovoimovelComponent, canDeactivate: [FormCanDeactivateGuard]},
    {
      path: 'editarimovel/:id',
      component: EditarimovelComponent,
      canDeactivate: [FormCanDeactivateGuard],
      resolve: {imovel: ImovelResolver},
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
