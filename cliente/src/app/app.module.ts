import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoginComponent } from './componentes/login/login.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { RouterModule, Routes} from "@angular/router";
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { SomosComponent } from './componentes/somos/somos.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    LoginComponent,
    ViajesComponent,
    SliderComponent,
    ConsultaComponent,
    SomosComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
