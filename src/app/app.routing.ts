import { CanActivateChild } from '@angular/router';
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

const App_Routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'users', 
    /*loadChildren: 'app/users/users.module#UsersModule',*/
    component: UsersComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [PruebaGuard]
  },
  {
    path: 'users/:id', component: UserComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [PruebaGuard]
  },
  { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
