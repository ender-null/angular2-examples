import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe(data => {
      for (let key$ in data){
        this.heroes = data;
        this.loading=false
      }
    })
  }

  ngOnInit() {
  }

  borrarHeroe(key$: string){
    this.heroesService.borrarHeroe(key$)
    .subscribe( res => {
      if (res) {
        console.error(res);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
