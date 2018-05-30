import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Users } from '../model/users';
import { MyServicesService } from '../servicios/my-services.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'app';
  users: Array<Users>;

  constructor(private myApi: MyServicesService) {
    
  }

  ngOnInit() {

    const usuario = this.myApi.getUsers().subscribe(
      data =>{
       this.users = data;
       console.log("data")
       console.log(this.users);
      } ,
      err => console.error(err),
      () => console.log('done loading foods')
    );

  }

}
