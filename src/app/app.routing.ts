import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Modulos*/
import { HomeComponent } from './home/home.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';


const App_Routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Routes);
