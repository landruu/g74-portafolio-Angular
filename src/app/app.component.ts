import { Component, OnInit } from '@angular/core';
import { PortafolioAService } from './servicios/portafolio-a.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title: string = "Titulo en variable";
    
  constructor () {
  //agregando funciones al componente.
  }

  ngOnInit(): void {
    // agregar funciones que inicien con el componente.
  }

}