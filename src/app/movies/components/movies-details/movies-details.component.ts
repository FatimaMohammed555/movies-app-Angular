import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit{

  id:any ;
  data:any={};
  loading:boolean = false;

  constructor(private route:ActivatedRoute , private serv:MoviesService) {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
      }
    
      ngOnInit(): void {
    this.getMovieById();
      }




getMovieById(){
  this.loading= true;
this.serv.getMovieByIdFromApi(this.id).subscribe((res) => {
  this.data=res;
  console.log(this.data , "details")
this.loading= false;
})
}


}
