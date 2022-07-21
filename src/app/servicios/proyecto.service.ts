import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'http://localhost:8080/project'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos():Observable<Proyecto[]> {
    return this.httpVar.get<Proyecto[]>(`${this.url}/ver`);
  }
}
