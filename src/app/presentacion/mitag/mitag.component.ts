import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-mitag',
  templateUrl: './mitag.component.html',
  styleUrls: ['./mitag.component.css']
})
export class MitagComponent implements OnInit {

  persData: Persona[] = [];

  persEdit: Persona = null;

  constructor(private persServicio: PersonaService) { }

  vistaNormal: boolean = true;
  vistaEdit: boolean = false;

  private extraerData(): void {
    this.persServicio.ObtenerDatos().subscribe(data => {
      this.persData = data;
    })
  }
  // Inicializar
  ngOnInit(): void {
    this.extraerData()
    this.preEdit();
  }

  // Shwicheo vistas
  defaultVist() {
    this.vistaEdit = false;
    this.vistaNormal = true;
  }
  switchToEdit() {
    this.vistaNormal = false;
    this.vistaEdit = true;
  }

  // Pre-Edit
  preEdit() {
    let id = 1;
    this.persServicio.detail(id).subscribe(data => {
      this.persEdit = data;
    }, err => {
      alert('Algo No ha salido bien');
    })
  }

  // Edit
  editar() {
    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('expEdit.id');
    disableBtn.setAttribute('disabled', 'true');

    let id = 1;
    this.persServicio.update(id, this.persEdit).subscribe(data => {
      this.persEdit = data;
      location.reload();
    }, err => {
      alert('Algo No ha salido bien');
    })
  }

}
