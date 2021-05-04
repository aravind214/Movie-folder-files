import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieHomeService } from '../movie-home.service';
export class Movies{
  MovieName:string="";
  DirectorName:string="";
  MovieImageId:number=0;
  ReleasedDate:Date=new Date();
  Images:string="";
  
}
export class login{
  // UserId:number=0;
  
  UserName:string="";
  // Password:string="";
 

}
@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {
  logindata:login=new login();
Movieslist:Movies=new Movies();
Movielistarray:Movies[]=[];
logout1:boolean=false;
userdata:string="";

  constructor(private service:MovieHomeService,private http:HttpClient,private Router:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.GetMovies().subscribe((rawdata:any)=>{
      this.Movielistarray=rawdata;
      // this.logindata=JSON.parse(this.Router.snapshot.params.obj1);
      console.log(this.Movielistarray[0]);
    })
this.userdata=this.Router.snapshot.params['profile'];
  }
  logout2(){
    alert(this.logout1=true)
  }

}
