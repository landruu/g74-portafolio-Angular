import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nametag',
  templateUrl: './nametag.component.html',
  styleUrls: ['./nametag.component.css']
})

export class NametagComponent implements OnInit {

  persData: Persona[] = [];

  constructor(private persServicio: PersonaService) { }

  private extraerData(): void {
    this.persServicio.ObtenerDatos().subscribe(data => {
      this.persData = data;
    })
  }
  // Inicializar
  ngOnInit(): void {
    this.extraerData()
  }
}
