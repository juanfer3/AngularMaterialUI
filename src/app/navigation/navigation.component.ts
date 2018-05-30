import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  mostrarMenu = false;

  constructor (private loguinService: LoginService) {

  }

  ngOnInit () {
    this.loguinService.mostrarMenu.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }
}
