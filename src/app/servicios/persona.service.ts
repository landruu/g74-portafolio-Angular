import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  url = 'https://porfolio-andres-ap.web.app/usuario'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos(): Observable<Persona[]> {
    return this.httpVar.get<Persona[]>(`${this.url}/ver`);
  }

  // Crear Exp
  public save(persons: Persona): Observable<any> {
    return this.httpVar.post<any>(this.url + '/crear', persons);
  }

  // UpDate
  public update(id: number, persons: Persona): Observable<any> {
    return this.httpVar.put<any>(this.url + `/editar/${id}`, persons);
  }

  // Delete
  public delete(id: number): Observable<any> {
    return this.httpVar.delete<any>(this.url + `/borrar/${id}`)
  }

  // detail
  public detail(id?: number): Observable<Persona> {
    return this.httpVar.get<Persona>(this.url + `/detail/${id}`);
  }
}
