import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable()
export class MyGuardGuard implements CanActivateChild {

  constructor(
    private autService: LoginService,
    private router: Router
  ) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|boolean {

    console.log('============RUTA==============');

    return true;
  }
}
