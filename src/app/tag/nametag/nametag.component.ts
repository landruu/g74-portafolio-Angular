import { Component, OnInit } from '@angular/core';
import { PortafolioAService } from 'src/app/servicios/portafolio-a.service';

@Component({
  selector: 'app-nametag',
  templateUrl: './nametag.component.html',
  styleUrls: ['./nametag.component.css']
})
export class NametagComponent implements OnInit {

  constructor(private datosPortafolio:PortafolioAService) {}

  portafolioData:any;

  ngOnInit(): void {
    this.datosPortafolio.ObtenerDatos().subscribe(data => {

      this.portafolioData= data;

    })
  }

}
