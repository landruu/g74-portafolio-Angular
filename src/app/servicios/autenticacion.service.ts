import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = 'https://andres-ap.herokuapp.com/app/login';

  constructor(private http:HttpClient) {}

  // autenticar
  public login(credenciales: Usuario): Observable<Boolean> {
    return this.http.post<Boolean>(this.url, credenciales).pipe(
      tap((response:Boolean)=>{
        if (response) {
          sessionStorage.setItem("user", "andres")
        }
      })
    );
  }

  //Deslogear
  public logout(){
    sessionStorage.removeItem("user");
  }

  //Logearse
  public isUserLogged(): Boolean {
    //return sessionStorage.getItem("user") !== null; // Descomentar para que funcione el simulador de logeo true
    return sessionStorage.getItem("user") !== null;
  }
}
