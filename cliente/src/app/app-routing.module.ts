import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "src/app/componentes/login/login.component";
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';

const routes: Routes = [
{path:"home",component:SliderComponent},
{path:"login",component:LoginComponent},
{path:"consulta",component:ConsultaComponent},
{path:"**",pathMatch:"full",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
