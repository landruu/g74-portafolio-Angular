import { Component, OnInit } from '@angular/core';
import { Educacion } from '../model/educacion';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { EducacionService } from '../servicios/educacion.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {

  newInstitucion: String = '';
  newLogo: String = '';
  newDescripcion: String = '';
  newCompleto: Boolean = false;
  newDuracion: String = '';


  constructor(private eduData: EducacionService, private isLogged: AutenticacionService) { }

  vistaNormal: boolean = true;
  vistaAdd: boolean = false;
  vistaEdit: boolean = false;

  formEdit: Educacion = null;

  formacionData: Educacion[] = [];

  ngOnInit(): void {
    this.extraerData();
  }

  onAdmin(): Boolean {
    return this.isLogged.isUserLogged();
  };

  //Extraigo datos
  private extraerData(): void {
    this.eduData.ObtenerDatos().subscribe(data => {
      this.formacionData = data;
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

    this.formEdit = this.formacionData.find(element => element.id === id);
    this.vistaNormal = false;
    this.vistaEdit = true;
    this.preEdit(id);
  }

  //agregar 
  addForm() {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('addExpBtn');
    disableBtn.setAttribute('disabled', 'true');

    const newEdu = new Educacion(this.newInstitucion, this.newLogo, this.newDescripcion, this.newCompleto, this.newDuracion);
    this.eduData.save(newEdu).subscribe(() => {
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
      this.eduData.delete(id).subscribe(() => {
        location.reload();
      }, err => {
        location.reload();
        alert('Algo No ha salido bien');
      })
    }
  }

  // Pre-Edit
  preEdit(id: number) {

    this.eduData.detail(id).subscribe(data => {
      this.formEdit = data;
    }, () => {
      alert('Algo No ha salido bien');
    })

  }

  // Edit
  editar(id: number) {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('expEdit.id');
    disableBtn.setAttribute('disabled', 'true');

    this.eduData.update(id, this.formEdit).subscribe(() => {
      location.reload();
    }, () => {
      alert('Algo No ha salido bien');
    })
  }

}
