import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-resultados',
    templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

    heroes: Heroe[] = [];
    texto:string;

    constructor(private activatedRoute: ActivatedRoute,
        private _heroesService: HeroesService,
        private router: Router) {

        this.activatedRoute.params.subscribe(params => {
          this.texto = params['texto'];
            this.heroes = this._heroesService.buscarHeroes(params['texto']);
        })
    }

    ngOnInit() {
    }

    verHeroe( idx:number ) {
        this.router.navigate(['heroe', idx]);
    }

}
