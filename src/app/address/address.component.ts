import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { MyServicesService } from '../servicios/my-services.service';

import { Users } from '../model/users';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  usuario: any;
  constructor(private route: ActivatedRoute, private router: Router, private myApi: MyServicesService) { }
  sub: any;
  public users: Array<Users>;
  public user: any = [];
  public mydata: any = [];
  id: any;
  ngOnInit() {
    /* Tomar id del la url */
    this.route.parent.params.subscribe(params =>{
      this.id = params['id'];
      console.log('Este es el ID: ' + this.id);
      
    }); // Object {}
    
    console.log('estamos en las direcciones' + this.id);
    this.myApi.getUserId(Number(this.id)).subscribe(
      data => {
        this.user = data;
        console.log('data');
        console.log(this.user);
      },
      err => console.error(err),
      () => console.log('estas son las direcciones')
    );

  }

}
