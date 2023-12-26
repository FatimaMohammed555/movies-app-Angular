import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {

movies:any[] = [];
loading:boolean = false;
title:string = '';


  constructor(private movieServ:MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
    }


  getMovies(){
    this.loading= true;
    this.movieServ.getMoviesFromApi().subscribe((res:any) => {
    this.movies = res;
    this.loading= false;
    console.log(res);
    // console.table(res)
    })
    }

// search movie by title
  searchByTitle(){
    if (this.title !== "") {
      this.movies = this.movies.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    } else {
      // this.getMovies();
      this.ngOnInit();
    }
      
    }

// search movie by title another solution using api for searching
searchTitle(){
  this.movieServ.searchMoviByTitle(this.title).subscribe((res:any) =>{
this.movies = res;
console.log(this.movies);
  })
}


}
