import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesWatchedService } from 'src/app/shared/services/movieswatched.service';
import { RecommendationService } from 'src/app/shared/services/recommendation.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {

  private moviesWatchedSub: Subscription;
  private moviesRecommendedSub: Subscription;

  constructor(private recommendationService: RecommendationService,
    private moviesWatchedService: MoviesWatchedService) { }

  ngOnInit(): void {

    this.moviesWatchedSub = this.moviesWatchedService.getMoviesWatched().subscribe(e => {
      console.log('e', e);
    });

    this.moviesRecommendedSub = this.recommendationService.getMoviesRecommended().subscribe(e => {
      console.log('e2', e);
    });
  }

  ngOnDestroy(): void {
    if (this.moviesWatchedSub) {
      this.moviesWatchedSub.unsubscribe();
    }

    if (this.moviesRecommendedSub) {
      this.moviesRecommendedSub.unsubscribe();
    }
  }

}
