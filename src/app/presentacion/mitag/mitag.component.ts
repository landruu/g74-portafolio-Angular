import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-mitag',
  templateUrl: './mitag.component.html',
  styleUrls: ['./mitag.component.css']
})
export class MitagComponent implements OnInit {

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
