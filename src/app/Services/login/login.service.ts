import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../../../GlobalConstas';
import { HttpClient } from '@angular/common/http';
import { responseApi } from '../../interfaces/responseApi';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private  http : HttpClient) { }

  login (form : any ) : Observable<responseApi>{
    const  direction = BaseUrl.concat("login")
    return this.http.post<responseApi>(direction , form)
  }
}
