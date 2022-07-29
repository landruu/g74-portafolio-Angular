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
    this.goStart();
    return this.isLogged.isUserLogged();
  }

  NoAdmin() {
    this.isLogged.logout();
    this.goStart();
  }
  goStart(){
    this.rutear.navigate(['']);
  }

}
