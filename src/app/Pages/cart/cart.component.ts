import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/FoodService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }
  getShoppingCart(){
    this.items = this.cartService.getShoppingItem();
  }
  deleteEventHandler(p:any){
    console.log("event handled")
    this.getShoppingCart()
  }
}
