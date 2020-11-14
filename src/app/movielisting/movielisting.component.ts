import { Component, OnInit } from '@angular/core';
import { Movie } from '../interface/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movielisting',
  templateUrl: './movielisting.component.html',
  styleUrls: ['./movielisting.component.scss']
})
export class MovielistingComponent implements OnInit {

 movieList: Movie[]
  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.loadMovies()
  }


loadMovies(): void {
  this.movieservice.getMovies().subscribe(response => {
       console.log("RESPONSE",response)
       this.movieList= response.Search;
  })
}
}