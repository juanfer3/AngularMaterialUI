import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Users } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  users: Array<Users>;
  private apiUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient ) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getUserId(id: number) {
    return this.http.get(this.apiUrl + id);
  }



}
