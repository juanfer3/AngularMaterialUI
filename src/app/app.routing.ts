import { AddressComponent } from './address/address.component';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Modulos*/
import { HomeComponent } from './home/home.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { UsersGuardService } from './guards/users.guard.service';
import { GuardUsersService } from './guards/guard-users.service';
import { PruebaGuard } from './guards/prueba.guard';
import { MyGuardGuard } from './guards/my-guard.guard';

const App_Routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivateChild: [MyGuardGuard]
  },
  {
    path: 'users',
    /*loadChildren: 'app/users/users.module#UsersModule',*/
    component: UsersComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [MyGuardGuard]
  },
  {
    path: 'users/:id', component: UserComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'address', component: AddressComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNoFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
