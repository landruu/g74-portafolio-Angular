import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor(private projData: ProyectoService) {

  }

  proyectoData: Proyecto[] = [];

  private extraerData(): void {
    this.projData.ObtenerDatos().subscribe(data => {
      this.proyectoData = data;
    })
  }

  ngOnInit(): void {
    this.extraerData();
  }

}
