import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "hombre",
    acepta: false
  }

  paises = [{
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }]

  sexos : string[] = ["Hombre", "Mujer", "Sin definir"];

  constructor() { }

  guardar(forma: NgForm){
    console.log("NgForm", forma);
    console.log("Valor", forma.value);
    console.log("Usuario", this.usuario);
  }

}
