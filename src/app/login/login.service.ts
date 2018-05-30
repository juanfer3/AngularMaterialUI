import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAut = false;

  mostrarMenu = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  validationUser (user: string) {

    if (user === 'myUser') {
      console.log('True');
      this.userAut = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(['/home']);
    } else {
      this.userAut = false;
      console.log(this.userAut);
      this.mostrarMenu.emit(false);
    }

  }


  usuarioAutenticado () {
    return this.userAut;
  }



}
