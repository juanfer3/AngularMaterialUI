import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Routers */
import { routing } from './app.routing';

/* Material import */
/*
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
*/

/*Material Import*/
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';




/*Extras Import*/
import 'hammerjs';


/*Component Import*/
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VideoGamesComponent } from './video-games/video-games.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { UsersGuardService } from './guards/users.guard.service';
import { GuardUsersService } from './guards/guard-users.service';
import { PruebaGuard } from './guards/prueba.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    VideoGamesComponent,
    UsersComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers:
    [
      LoginService,
      AuthGuardService,
      UsersGuardService,
      GuardUsersService,
      PruebaGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
