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
    
    portafolioData:any; // declaro variable para guardar datos del portafolios

    ngOnInit(): void { // procedimiento que guarda datos en variable
      this.datosPortafolio.ObtenerDatos().subscribe(data =>{
        this.portafolioData=data;
      });
    }

  }