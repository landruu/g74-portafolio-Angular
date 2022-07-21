import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'http://localhost:8080/exp'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos():Observable<Experiencia[]> {
    return this.httpVar.get<Experiencia[]>(`${this.url}/ver`);
  }
}
