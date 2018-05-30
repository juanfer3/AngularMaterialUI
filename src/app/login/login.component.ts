import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userAut = false;

  constructor(private autenticar: LoginService ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.value);
    this.autenticar.validationUser(String (form.value.user));
  }

}
