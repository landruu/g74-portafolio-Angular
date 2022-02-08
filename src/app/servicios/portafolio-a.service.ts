import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // modulo y clase de peticion http
import { Observable, observable } from 'rxjs'; // coleccion de eventos, es un metodo.


@Injectable({
  providedIn: 'root'
})

export class PortafolioAService {

  constructor(private http:HttpClient) { }

  ObtenerDatos():Observable<any> {
    return this.http.get('./assets/tempJSon/demoData.json');
  }
}
