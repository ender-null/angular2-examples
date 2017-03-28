import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    nombre = 'Fernando';
    nombre2 = "fernAndo alberto heRRera jimeno"
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    pi = Math.PI;
    a = 0.234;
    salario = 1234.5;
    heroe = {
        nombre: "Logan",
        clave: "Wolverine",
        edad: 500,
        direccion: {
            calle: "Primera",
            casa: "19"
        }
    }
    valorDePromesa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Llego la data!'), 3500);
    })
    fecha = new Date();
    video = "mOeSfOJrUIk";
    activar = true;

}
