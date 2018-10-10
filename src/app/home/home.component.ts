import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:Object = [
   {name:"Ronaldo",club:"Real Madraid"},
   {name:"Messi",club:"Barcelona"},
   {name:"Neymar",club:"Barcelona"},
   {name:"Swarez",club:"Barcelona"},
   {name:"Benzema",club:"Real Madraid"},
   {name:"Bale",club:"Real Madraid"}
  ]
  constructor(private router:ActivatedRoute,private route:Router) { }
  
  ngOnInit() {
  }
  clickWishList(){
    this.route.navigate(['wishlist'],{relativeTo:this.router})
  }
  clickCart(){
    this.route.navigate(['cart'],{relativeTo:this.router})
  }
}
