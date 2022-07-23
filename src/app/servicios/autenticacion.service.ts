import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = 'localhost:8080/login';
  currentuserSubjet: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log("El Servicio de autenticación: OK");
    this.currentuserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentuser') || '{}'))
  }

  iniciarSession(credenciales:any):Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data =>{

      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
