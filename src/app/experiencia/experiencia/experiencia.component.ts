import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  constructor(public expData: ExperienciaService) { }



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

  //agregar 
  addExperiencia() {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('addExpBtn');
    disableBtn.setAttribute('disabled', 'true');

    const Newexp = new Experiencia(this.newName, this.newLogo, this.newDesc, this.newAlta, this.newBaja);
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
    // let nowYear = new Date().getUTCFullYear();
    // let nowMonth = new Date().getFullYear();
    // let nowDay = new Date().getDay();

    // let regDate = this.expEdit.baja;
    // console.log(nowYear.toString()+ '-' + nowMonth.toString() + '-' + nowDay.toString());
    // console.log(regDate);
  }

  // Edit
  editar(id: number) {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('expEdit.id');
    disableBtn.setAttribute('disabled', 'true');

    this.expData.update(id, this.expEdit).subscribe(data => {
      this.expEdit = data;
      location.reload();
    }, () => {
      alert('Algo No ha salido bien');
    })
  }

}
