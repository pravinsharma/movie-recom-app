import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as moviesRecommended from '../../../assets/static/movies_recommended.json';
import { IMovie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private httpClient: HttpClient) { }

  public getMoviesRecommended(): Observable<Array<IMovie>> {
    return of(moviesRecommended);
  }
}
