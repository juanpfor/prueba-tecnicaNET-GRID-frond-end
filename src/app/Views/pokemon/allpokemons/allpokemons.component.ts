import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../Services/pokemons/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allpokemons',
  templateUrl: './allpokemons.component.html',
  styleUrls: ['./allpokemons.component.css']
})
export class AllpokemonsComponent implements OnInit {

  allpokemos: any[] = []
  constructor(
    private servicesPokemon: PokemonsService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getAllPokemos()
  }

  getAllPokemos () {
      this.servicesPokemon.getAllPokemos().subscribe(data => {
          this.fecthPokemon(data.results.length)
      })
  }

  fecthPokemon( range : any) {
    for (let i = 1; i < range + 1; i++) {

    this.servicesPokemon.getPoemonByID(i).subscribe(
      data => {
        this.allpokemos.push(data)
      },
      err => {

      }
    )
  }
  }

  verPokemon (id : number | string) {
    this.route.navigate([`/dashboard/pokemonbyid/${id}`])
  }
}
