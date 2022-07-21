import { Component, OnInit } from "@angular/core"
import { Persona } from "../model/persona";
import { PersonaService } from "../servicios/persona.service";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
  })
  export class AvatarComponent implements OnInit {

    constructor(private persData:PersonaService){

    }
    
    avatarData: Persona[] = [];

    ngOnInit(): void { // procedimiento que guarda datos en variable
      this.persData.ObtenerDatos().subscribe(datos =>{
        this.avatarData=datos;
      });
    }

  }