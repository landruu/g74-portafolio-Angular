import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor(private expData: ExperienciaService) {

  }

  experienciaData: Experiencia[] = [];

  private extraerData(): void {
    this.expData.ObtenerDatos().subscribe(data => {
      this.experienciaData = data;
    })
  }

  ngOnInit(): void {
    this.extraerData();
  }

}
