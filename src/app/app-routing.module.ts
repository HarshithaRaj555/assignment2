import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AvengerComponent } from './avenger/avenger.component';
import { MovielistingComponent } from './movielisting/movielisting.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomepageComponent },
  { path: 'new', component: AvengerComponent },
  { path: 'movies', component: MovielistingComponent },
  { path: 'movie/:id', component: MoviedetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
