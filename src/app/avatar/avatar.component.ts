import { Component } from "@angular/core"
import { PortafolioAService } from "../servicios/portafolio-a.service";

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
  })
  export class AvatarComponent {

    constructor(private datosPortafolio:PortafolioAService){


    }
    
    avatarData:any; // declaro variable para guardar imagen del avatar

    ngOnInit(): void { // procedimiento que guarda datos en variable
      this.datosPortafolio.ObtenerDatos().subscribe(data =>{
        this.avatarData=data;
      });
    }

  }