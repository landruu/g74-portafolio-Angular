import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  constructor(private expData: ExperienciaService, private router: Router, public _location: Location) { }



  vistaNormal: boolean = true;
  vistaAdd: boolean = false;
  vistaEdit: boolean = false;

  newName: String = '';
  newLogo: String = '';
  newDesc: String = '';
  newAlta: String = '';
  newBaja: String = '';

  experienciaData: Experiencia[] = [];

  private extraerData(): void {
    this.expData.ObtenerDatos().subscribe(data => {
      this.experienciaData = data;
      this.defaultVist();
    })
  }

  ngOnInit(): void {
    this.extraerData();
  }

  defaultVist() {
    this.vistaAdd = false;
    this.vistaEdit = false;
    this.vistaNormal = true;
  }
  switchToadd() {
    this.vistaNormal = false;
    this.vistaAdd = true;
  }

  //agregar experiencia
  addExperiencia() {
    const Newexp = new Experiencia(this.newName, this.newLogo, this.newDesc, this.newAlta, this.newBaja);
    this.expData.save(Newexp).subscribe( () => {
      this.defaultVist();
      location.reload();
    }, err => {
      this.defaultVist();
      alert('Algo No ha salido bien');
    })
  }

  // Borrar
  delete(id?: number) {
    this.defaultVist();
    if (id != undefined) {
      this.expData.delete(id).subscribe( () => {
        location.reload();
      }, err => {
        location.reload();
        alert('Algo No ha salido bien');
      })
    }
  }

}
