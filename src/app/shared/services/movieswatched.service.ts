import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as moviesWatched from '../../../assets/static/movies_watched.json';
import { IMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesWatchedService {

  constructor(private httpClient: HttpClient) { }

  public getMoviesWatched(): Observable<Array<IMovie>> {
    return of(moviesWatched);
  }
}
