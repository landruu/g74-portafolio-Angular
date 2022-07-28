import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private isLogged: AutenticacionService) { }

  ngOnInit(): void {
  }

  onAdmin(): Boolean {
    return this.isLogged.isUserLogged();
  }

}
