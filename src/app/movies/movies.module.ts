import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from "../shared/shared.module";
import { MovieComponent } from './components/movie/movie.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AllMoviesComponent,
        MoviesDetailsComponent,
        MovieComponent
    ],
    // exports: [
    //     AllMoviesComponent,
    //     MoviesDetailsComponent
    // ],
    imports: [
        // CommonModule,
        // BrowserModule,
        // AppRoutingModule,
        // RouterModule,
        // HttpClientModule,
        // FormsModule,
        // SharedModule


        CommonModule,
        RouterModule,
        SharedModule
    ]
})
export class MoviesModule { }


