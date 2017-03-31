import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log('directiva llamada')
    // el.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appResaltado")
  nuevoColor:string;

  @HostListener('mouseenter')
  mouseEntro(){
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave')
  mouseSale(){
    this.resaltar(null);
  }

  private resaltar (color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
