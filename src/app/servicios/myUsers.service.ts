import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




import { Users } from '../model/users';

@Injectable()
export  class MyUsersService {

    users: Array<Users>;


}
