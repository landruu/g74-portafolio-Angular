import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})

export class AppLoginComponent implements OnInit {

  form: FormGroup;
  formBuilder: any;

  constructor(formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private ruta: Router) {
    this.form = formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      }
    )
  }

  ngOnInit(): void {

  }

  ngOnSumit(event: Event){
    event.preventDefault;

    this.autenticacionService.login(this.form.value).subscribe(
      (Response: Boolean) => {
        if (Response) {
          alert('validado')
          //this.ruta.navigate([''])
        }
      }
    )
  };

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

}
