import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // modulo y clase de peticion http
import { Observable } from 'rxjs'; // coleccion de eventos, es un metodo.
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})

export class PortafolioAService {

  url = 'http://localhost:8080/usuario/ver'

  constructor(private http: HttpClient) { }

  ObtenerDatos():Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}`);
  }

}
