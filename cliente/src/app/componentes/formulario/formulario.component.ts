import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup(){
    return new FormGroup({
      nombre:new FormControl("",[Validators.required,Validators.minLength(5)]),
      correo:new FormControl("",[Validators.required,Validators.pattern(this.emailPattern)]),
      clave:new FormControl("",Validators.required),
      clave2:new FormControl("",Validators.required)
    })
  }
  ngOnInit() {
  }
  onSaveForm(){
  }
}
