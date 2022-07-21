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

  ObtenerDatos():Observable<Skill[]> {
    return this.httpVar.get<Skill[]>(`${this.url}/ver`);
  }
}
