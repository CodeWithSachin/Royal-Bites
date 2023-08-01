import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/FoodService/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  constructor(public activeModal:NgbActiveModal, private cartService:CartService) { }
  @Input() foodData:any;

  ngOnInit(): void {
    console.log(this.foodData);
    
  }
  addToCart(p:any){
    this.cartService.addProduct(p)
  }
}
