import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[];
  termino: string;

  constructor(private activateRoute: ActivatedRoute,
              private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe( params['termino'] );
    });

  }

}
