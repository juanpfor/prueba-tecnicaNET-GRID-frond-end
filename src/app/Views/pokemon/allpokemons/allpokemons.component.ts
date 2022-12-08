import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../Services/pokemons/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allpokemons',
  templateUrl: './allpokemons.component.html',
  styleUrls: ['./allpokemons.component.css']
})
export class AllpokemonsComponent implements OnInit {
  cantidadPokemon: number = 0
  allpokemos: any[] = []
  constructor(
    private servicesPokemon: PokemonsService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.getAllPokemos()
    this.fecthPokemon()
  }

  getAllPokemos () {
      this.servicesPokemon.getAllPokemos().subscribe(data => {
          this.cantidadPokemon = data.results.length
      })
  }

  fecthPokemon() {
    for (let i = 1; i < 20; i++) {

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
