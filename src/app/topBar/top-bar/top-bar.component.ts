import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private isLogged: AutenticacionService, private rutear: Router) { }

  ngOnInit(): void {
  }

  onAdmin(): Boolean {
    return this.isLogged.isUserLogged();
  }

  NoAdmin() {
    this.isLogged.logout(); // Deslogeo
    location.reload(); // Recargo página
  }

}
