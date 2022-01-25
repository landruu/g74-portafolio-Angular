import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title: string = "Titulo en variable";
    
  constructor () {
  //agregando funciones al componente ;)
  }

  logearse(){
    alert('Insertar funcion de logeo')
  }
}