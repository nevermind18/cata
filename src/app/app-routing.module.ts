import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario1Component } from './components/formulario1/formulario1.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { CartaoVisitaComponent } from './components/cartao-visita/cartao-visita.component';

const routes: Routes = [
  { path: '', component: Formulario1Component},
  { path: 'formulario2', component: Formulario2Component},
  { path: 'cartaovisita', component: CartaoVisitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
