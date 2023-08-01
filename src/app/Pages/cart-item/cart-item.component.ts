import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/FoodService/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() checkout_product:any;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    console.log(this.checkout_product);
    
  }
  removeItem(p:any){
    // delete this.checkout_product[p]
    this.cartService.removeItem(p)
    this.deleteEvent.emit(p)
  }
}
