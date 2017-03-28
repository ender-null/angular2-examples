import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

    transform(value: any, activar: boolean = true): any {
        let salida: string = "";

        if (activar) {
            for (let i = 0; i < value.length; i++) {
                salida += "*";
            }
            return salida;
        } else {
            return value
        }
    }
}
