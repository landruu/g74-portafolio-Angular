import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {

  constructor(private eduData: EducacionService) {

  }

  formacionData: Educacion[] = [];

  private extraerData(): void {
    this.eduData.ObtenerDatos().subscribe(data => {
      this.formacionData = data;
    })
  }

  ngOnInit(): void {
    this.extraerData();
  }

}
