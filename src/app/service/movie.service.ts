import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = 'apiKey=ada0b951'
  baseUrl ='http://www.omdbapi.com/'

  constructor(private httpclient: HttpClient) { }


getMovies() : Observable<any> {
  const url = `${this.baseUrl}?s=avengers&${this.apiKey}`
  return this.httpclient.get(url)
}

getMovie(id) : Observable<any> {
  const url = `${this.baseUrl}?i=${id}&${this.apiKey}`
  return this.httpclient.get(url)
}
}                  