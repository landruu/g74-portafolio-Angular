import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  newName: String = '';
  newInicio: String = '';
  newDesc: String = '';
  newLink: String = '';

  constructor(private projData: ProyectoService, private isLoggeed: AutenticacionService) { }

  vistaNormal: boolean = true;
  vistaAdd: boolean = false;
  vistaEdit: boolean = false;

  projectEdit: Proyecto = null;

  proyectoData: Proyecto[] = [];

  ngOnInit(): void {
    this.extraerData();
  }

  onAdmin():Boolean {
    return this.isLoggeed.isUserLogged();
  }

  // Extraer Datos
  private extraerData(): void {
    this.projData.ObtenerDatos().subscribe(data => {
      this.proyectoData = data;
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

    this.projectEdit = this.proyectoData.find(element => element.id === id);
    this.vistaNormal = false;
    this.vistaEdit = true;
    this.preEdit(id);
  }

  //agregar 
  addForm() {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('addbBtn');
    disableBtn.setAttribute('disabled', 'true');

    const newProject = new Proyecto(this.newName, this.newInicio, this.newDesc, this.newLink);
    this.projData.save(newProject).subscribe(() => {
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
      this.projData.delete(id).subscribe(() => {
        location.reload();
      }, err => {
        location.reload();
        alert('Algo No ha salido bien');
      })
    }
  }

  // Pre-Edit
  preEdit(id: number) {

    this.projData.detail(id).subscribe(data => {
      this.projectEdit = data;
    }, () => {
      alert('Algo No ha salido bien');
    })

  }

  // Edit
  editar(id: number) {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('editbBtn');
    disableBtn.setAttribute('disabled', 'true');

    const newProject = new Proyecto(this.projectEdit.nombre, this.projectEdit.iniciado, this.projectEdit.descripcion, this.projectEdit.link);

    this.projData.update(id, newProject).subscribe(() => {
      location.reload();
    }, () => {
      alert('Algo No ha salido bien');
    })
  }
}
