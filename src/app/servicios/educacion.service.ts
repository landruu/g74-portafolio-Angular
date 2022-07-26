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

  ObtenerDatos(): Observable<Educacion[]> {
    return this.httpVar.get<Educacion[]>(`${this.url}/ver`);
  }

  // Crear Exp
  public save(education: Educacion): Observable<any> {
    return this.httpVar.post<any>(this.url + '/crear', education);
  }

  // UpDate
  public update(id: number, education: Educacion): Observable<any> {
    return this.httpVar.put<any>(this.url + `/editar/${id}`, education);
  }

  // Delete
  public delete(id: number): Observable<any> {
    return this.httpVar.delete<any>(this.url + `/borrar/${id}`)
  }

  // detail
  public detail(id?: number): Observable<Educacion> {
    return this.httpVar.get<Educacion>(this.url + `/detail/${id}`);
  }
}
