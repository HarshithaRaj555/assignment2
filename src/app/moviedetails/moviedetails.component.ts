import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interface/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  movie: Movie
  constructor(private movieservice: MovieService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie()
  }

  loadMovie() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieservice.getMovie(id).subscribe(response => {
    
    this.movie = response
    })
      
  }
}
