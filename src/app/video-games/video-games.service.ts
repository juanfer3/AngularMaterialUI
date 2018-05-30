import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { VideoGamesComponent } from './video-games.component';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ListaVideoGames {

  // tslint:disable-next-line:max-line-length
  private apiUrl = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json';
  private http: HttpClient;


  constructor() {

  }

  imgVideoGames() {
    return this.http.get<any>(this.apiUrl);
  }


}
