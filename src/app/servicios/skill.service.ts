import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {

  url = 'http://localhost:8080/skill'

  constructor(private httpVar: HttpClient) { }

  ObtenerDatos(): Observable<Skill[]> {
    return this.httpVar.get<Skill[]>(`${this.url}/ver`);
  }
  // Crear Exp
  public save(skills: Skill): Observable<any> {
    return this.httpVar.post<any>(this.url + '/crear', skills);
  }

  // UpDate
  public update(id: number, skills: Skill): Observable<any> {
    return this.httpVar.put<any>(this.url + `/editar/${id}`, skills);
  }

  // Delete
  public delete(id: number): Observable<any> {
    return this.httpVar.delete<any>(this.url + `/borrar/${id}`)
  }
}
