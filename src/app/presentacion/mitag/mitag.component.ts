import { Component, OnInit } from '@angular/core';
import { PortafolioAService } from 'src/app/servicios/portafolio-a.service';

@Component({
  selector: 'app-mitag',
  templateUrl: './mitag.component.html',
  styleUrls: ['./mitag.component.css']
})
export class MitagComponent implements OnInit {

  constructor(private datosPortafolio:PortafolioAService) {

   }

  tagData:any;

  ngOnInit(): void {
    this.datosPortafolio.ObtenerDatos().subscribe(data => {
      this.tagData=data; //tomo el objeto json en una variable
    })
  }

}
