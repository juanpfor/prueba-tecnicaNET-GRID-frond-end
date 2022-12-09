import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../Services/pokemons/pokemons.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-pokemonbyid',
  templateUrl: './pokemonbyid.component.html',
  styleUrls: ['./pokemonbyid.component.css']
})
export class PokemonbyidComponent implements OnInit {

  pokemon : any
  IDpokemon : any

  typespokemon : any[] = []
  abilities : any[] = []
  moves : any[] = []
  game_index : any[] = []

  constructor(
    private servicesPokemon: PokemonsService,
    private route: Router,
    private activeRoute: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.IDpokemon = this.activeRoute.snapshot.params

    this.getPokemonByID(this.IDpokemon.id);
  }

  getPokemonByID(id : number | string) {
    this.servicesPokemon.getPoemonByID(id).subscribe(
      data => {
        this.pokemon = data
        this.typespokemon = data.types
        this.abilities = data.abilities
        for (let index = 0; index < 2; index++) {
          this.moves.push(data.moves[index].move.name)
        }
        for (let index = 0; index < 2; index++) {
          this.game_index.push(data.game_indices[index].version.name)
        }
      },
      err => {

      }
    )
  }


}
