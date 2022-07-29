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

  ObtenerDatos(): Observable<Proyecto[]> {
    return this.httpVar.get<Proyecto[]>(`${this.url}/ver`);
  }
  // Crear Exp
  public save(projects: Proyecto): Observable<any> {
    return this.httpVar.post<any>(this.url + '/crear', projects);
  }

  // UpDate
  public update(id: number, projects: Proyecto): Observable<any> {
    return this.httpVar.put<any>(this.url + `/editar/${id}`, projects);
  }

  // Delete
  public delete(id: number): Observable<any> {
    return this.httpVar.delete<any>(this.url + `/borrar/${id}`)
  }

  // detail
  public detail(id?: number): Observable<Proyecto> {
    return this.httpVar.get<Proyecto>(this.url + `/detail/${id}`);
  }
}
