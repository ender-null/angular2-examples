import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  perfil: Object;

  constructor( private auth: Auth ) {
    this.perfil = this.auth.getProfile();
    console.log(this.perfil);
  }

  ngOnInit() {
  }

}
