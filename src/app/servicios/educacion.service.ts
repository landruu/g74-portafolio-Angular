import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  url = 'http://localhost:8080/edu'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos():Observable<Educacion[]> {
    return this.httpVar.get<Educacion[]>(`${this.url}/ver`);
  }
}
