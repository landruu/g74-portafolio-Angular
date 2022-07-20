import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  url = 'http://localhost:8080/usuario/ver'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos():Observable<Persona[]> {
    return this.httpVar.get<Persona[]>(`${this.url}`);
  }
}
