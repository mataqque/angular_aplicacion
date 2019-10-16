import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes} from "@angular/router";
import { ConsultaComponent } from './componentes/consulta/consulta.component';

const rutas:Routes = [
  {
    path:"login",component:LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavegacionComponent,
    LoginComponent,
    ViajesComponent,
    SliderComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
