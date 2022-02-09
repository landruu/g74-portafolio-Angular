import { Component, OnInit } from '@angular/core';
import { PortafolioAService } from '../servicios/portafolio-a.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor(private datosPortafolio:PortafolioAService) { 

  }
  formacionData:any;

  ngOnInit(): void {
    this.datosPortafolio.ObtenerDatos().subscribe(data => {
      console.log(data)
      this.formacionData=data; //tomo el objeto json en una variable
    })
  }

}
