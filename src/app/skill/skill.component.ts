import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { Skill } from '../model/skill';
import { SkillService } from '../servicios/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {

  newName: String = '';
  newDesc: String = '';
  newAvance: number = 0;

  constructor(private skillData: SkillService) { }

  vistaNormal: boolean = true;
  vistaAdd: boolean = false;
  vistaEdit: boolean = false;

  skillEdit: Skill = null;

  habilidadesData: Skill[] = [];

  ngOnInit(): void {
    this.extraerData();
  }

  // Extraer Datos
  private extraerData(): void {
    this.skillData.ObtenerDatos().subscribe(data => {
      this.habilidadesData = data;
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

    this.skillEdit = this.habilidadesData.find(element => element.id === id);
    this.vistaNormal = false;
    this.vistaEdit = true;
    this.preEdit(id);
  }

  //agregar 
  addForm() {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('addbBtn');
    disableBtn.setAttribute('disabled', 'true');

    // tomando las opciones del select
    let selected = document.querySelector('select').options.selectedIndex
    if (selected === 1) {
      this.newName = 'Hard-Skill: ' + this.newName
    } else {
      this.newName = 'Soft-Skill: ' + this.newName
    }

    const newSkill = new Skill(this.newName, this.newDesc, this.newAvance);
    this.skillData.save(newSkill).subscribe(() => {
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
      this.skillData.delete(id).subscribe(() => {
        location.reload();
      }, err => {
        location.reload();
        alert('Algo No ha salido bien');
      })
    }
  }

  // Pre-Edit
  preEdit(id: number) {

    this.skillData.detail(id).subscribe(data => {
      this.skillEdit = data;
    }, () => {
      alert('Algo No ha salido bien');
    })

  }

  // Edit
  editar(id: number) {

    // Deshabilito el boton para evitar errores.
    let disableBtn = document.getElementById('editbBtn');
    disableBtn.setAttribute('disabled', 'true');

    this.skillData.update(id, this.skillEdit).subscribe(data => {
      this.skillEdit = data;
      location.reload();
    }, () => {
      alert('Algo No ha salido bien');
    })
  }

}
