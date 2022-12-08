import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseUrl } from '../../../../GlobalConstas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private  http : HttpClient) { }

  login (form : any ) : Observable<any>{
    const  direction = BaseUrl.concat("login")
    return this.http.post<any>(direction , form)
  }
}
