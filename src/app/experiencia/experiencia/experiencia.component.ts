import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  constructor(public expData: ExperienciaService, private isLoggeed: AutenticacionService) { }



  vistaNormal: boolean = true;
  vistaAdd: boolean = false;
  vistaEdit: boolean = false;

  newName: String = '';
  newLogo: String = '';
  newDesc: String = '';
  newAlta: String = '';
  newBaja: String = '';
  expEdit: Experiencia = null;

  experienciaData: Experiencia[] = [];

  ngOnInit(): void {
    this.extraerData();
  }

  onAdmin(): Boolean {
    return this.isLoggeed.isUserLogged();
  }

  //Extraigo datos
  private extraerData(): void {
    this.expData.ObtenerDatos().subscribe(data => {
      this.experienciaData = data;
      this.defaultVist();
    })
  }

  // Shwicheo vistas
  defaultVist() {
    this.vistaAdd = false;
    this.vistaEdit = false;
    this.vistaNormal = true;
  }
  switchToadd() {
    this.vistaNormal = false;
    this.vistaAdd = true;
  }
  switchToEdit(id: number) {

    this.expEdit = this.experienciaData.find(element => element.id === id);
    this.vistaNormal = false;
    this.vistaEdit = true;
    this.preEdit(id);
  }

  // Control automatico: Actualmente Activo
  disableDateAdd() {
    let check = document.getElementById('dateAdd');
    check.setAttribute('disabled', 'true');
  }
  disableDateEdit() {
    let check = document.getElementById('dateEdit');
    check.setAttribute('disabled', 'true');
  }

  //agregar 
  addExperiencia() {

    // Deshabilito el boton Agregar para evitar errores de envíos
    let disableBtn = document.getElementById('addExpBtn');
    disableBtn.setAttribute('disabled', 'true');

    // Instancio el nuevo Objeto
    const Newexp = new Experiencia(this.newName, this.newLogo, this.newDesc, this.newAlta, this.newBaja);

    // Si actualmente trabaja indicando por el CheckBox
    let check = document.getElementById('dateEdit');
    if ( ('#dateEdit').valueOf() !== '' ) {
      Newexp.baja = 'Actualmente Activo';
    }

    // Uso el servicio para guardar el nuevo objeto
    this.expData.save(Newexp).subscribe(() => {
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
      this.expData.delete(id).subscribe(() => {
        location.reload();
      }, err => {
        location.reload();
        alert('Algo No ha salido bien');
      })
    }
  }

  // Pre-Edit
  preEdit(id: number) {

    this.expData.detail(id).subscribe(data => {
      this.expEdit = data;
    }, () => {
      alert('Algo No ha salido bien');
    })

  }

  // Edit
  editar(id: number) {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('expEdit.id');
    disableBtn.setAttribute('disabled', 'true');

    // Controlar si se modifica una baja pre-asignada por un valor actual.
    let check = document.getElementById('dateEdit');
    if (check != null ) {
      this.expEdit.baja = 'Actualmente Activo';
    }

    this.expData.update(id, this.expEdit).subscribe(data => {
      this.expEdit = data;
      location.reload();
    }, () => {
      alert('Algo No ha salido bien');
    })
  }

}
