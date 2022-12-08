import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrlPokemon } from '../../../../GlobalConstas';
import { HttpClient } from '@angular/common/http';
import { responseApi } from '../../interfaces/responseApi';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor (private  http : HttpClient) { }

  getAllPokemos () : Observable<any>{
    const  direction = BaseUrlPokemon.concat("pokemon")
    return this.http.get<any>(direction)
  }

  getPoemonByID (id : number | string) : Observable<any>{
    const  direction = BaseUrlPokemon.concat(`pokemon/${id}`)
    return this.http.get<any>(direction)
  }

}
