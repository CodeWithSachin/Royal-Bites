import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/FoodService/auth.service';
import { CartService } from 'src/app/FoodService/cart.service';
import { FoodService } from 'src/app/FoodService/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  constructor(public authService:AuthService, public cartService:CartService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    localStorage.clear()
  }

  cart(){
    if(this.authService.IsLoggedIn()){
      this.router.navigate(['/cart'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }

}
