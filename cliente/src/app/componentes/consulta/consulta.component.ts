import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  datos:any=[
    {nombre:"flavio",apellido:"mataqque",dni:72403398,sexo:"masculino",edad:23},
    {nombre:"juan",apellido:"arevalo",dni:43902030,sexo:"masculino",edad:21},
    {nombre:"camila",apellido:"robles",dni:72453698,sexo:"femenido",edad:24},
    {nombre:"luis",apellido:"torres",dni:72035698,sexo:"masculino",edad:29},
    {nombre:"fernando",apellido:"terrones",dni:89403398,sexo:"masculino",edad:40},
    {nombre:"hugo",apellido:"castillo",dni:78903538,sexo:"masculino",edad:13},
    {nombre:"rosa",apellido:"maldonado",dni:53403455,sexo:"femenino",edad:53},
    {nombre:"gerardo",apellido:"pinares",dni:34543422,sexo:"masculino",edad:23}
  ];
  constructor() {}

  ngOnInit() {
  }

}
