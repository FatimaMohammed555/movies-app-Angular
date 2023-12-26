import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseTwoApi:string ="https://freetestapi.com/api/v1/";


  constructor(private http:HttpClient) { }


//get all products
  getMoviesFromApi(){
  return this.http.get(this.baseTwoApi + 'movies');
  // return this.http.get(environment.baseApi + 'products')
  }

  // https://freetestapi.com/api/v1/movies?search=[query]
  // fetch(`https://freetestapi.com/api/v1/products?search=${keyword}`)


  getMovieByIdFromApi(id:any){
    return this.http.get(this.baseTwoApi +'movies/'+ id);
}


searchMoviByTitle(searchValue:string){
return this.http.get(`https://freetestapi.com/api/v1/movies?search=${searchValue}`)
}


}