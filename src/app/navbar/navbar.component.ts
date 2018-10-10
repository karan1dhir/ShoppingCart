import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navigateToWishList(){
   console.log('navigateToWishList')
  }
  navigateToCart(){
    console.log('navigateToCart')
  }
}
