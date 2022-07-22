import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})

export class AppLoginComponent implements OnInit {

  form:FormGroup;
  formBuilder: any;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group (
      {
        // PRESS CNTRL+K+C TO DESBLOCK

        // email: ['', [Validators.required, Validators.email]],
        // password: ['', [Validators.required, Validators.minLength(8)]],
        // diviceInfo: this.formBuilder.group({
        //   diviceid: ["12345678998"],
        //   diviceType: ["DIVICE_TYPE_ANDROID"],
        //   noticationToken: ["45612378asddsa34"]
        // })

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

}
