import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})

export class AppLoginComponent implements OnInit {

  form:FormGroup;
  formBuilder: any;

  constructor(formBuilder: FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form = formBuilder.group (
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {

  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEviar(event:Event)
  {
    event.preventDefault;
    this.autenticacionService.iniciarSession(this.form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/'])
    })
  }

}
