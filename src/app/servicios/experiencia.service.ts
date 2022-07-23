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

  // Obtener datos
  ObtenerDatos():Observable<Experiencia[]> {
    return this.httpVar.get<Experiencia[]>(`${this.url}/ver`);
  }

  // Crear Exp
  public save(experiencia: Experiencia): Observable<any>{
    return this.httpVar.post<any>(this.url + '/crear', experiencia);
  }

  // UpDate
  public update(id: number, experiencia:Experiencia): Observable<any>{
    return this.httpVar.put<any>(this.url + `/editar/${id}`, experiencia);
  }

  // Delete
  public delete(id: number): Observable<any>{
    return this.httpVar.delete<any>(this.url + `/borrar/${id}`)
  }
  
}
