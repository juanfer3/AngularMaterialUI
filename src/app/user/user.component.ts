import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';
import { MyServicesService } from '../servicios/my-services.service';

import { Users } from '../model/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MyServicesService]
})
export class UserComponent implements OnInit {

  usuario: any;
  constructor(private route: ActivatedRoute, private myApi: MyServicesService) { }
  sub: any;
  public users: Array<Users>;
  public user: any = [];
  public mydata: any = [];
  ngOnInit() {
    /*this.usuario = this.usuariosService.getUsuarioId(Number (id));
    this.sub = this.route.params.subscribe(params => {
     const id = params['id'];
      console.log(id);
    });*/

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.myApi.getUserId(Number(id)).subscribe(
      data => {
        this.user = data;
        console.log('data');
        console.log(this.user);
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );



  }

}
