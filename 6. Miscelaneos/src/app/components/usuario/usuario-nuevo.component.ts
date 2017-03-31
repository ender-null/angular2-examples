import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo Works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      console.log("Ruta hija");
      console.log(parametros);
    })
  }

  ngOnInit() {
  }

}
