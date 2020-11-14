import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AvengerComponent } from './avenger/avenger.component';
import { MovielistingComponent } from './movielisting/movielisting.component';
import {HttpClientModule} from '@angular/common/http';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AvengerComponent,
    MovielistingComponent,
    MoviedetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
