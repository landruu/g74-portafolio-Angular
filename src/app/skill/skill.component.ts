import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../servicios/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {

  constructor(private skillData: SkillService) {

  }

  habilidadesData: Skill[] = [];

  private extraerData(): void {
    this.skillData.ObtenerDatos().subscribe(data => {
      this.habilidadesData = data;
    })
  }

  ngOnInit(): void {
    this.extraerData();
  }

}
