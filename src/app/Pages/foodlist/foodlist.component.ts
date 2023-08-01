import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { FoodComponent } from 'src/app/FoodModal/food/food.component';
import { CartService } from 'src/app/FoodService/cart.service';
import { FoodService } from 'src/app/FoodService/food.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  status:boolean=false;
  rating: any = '';
  foodList: any;
  bestSellingList: any = [];
  recommenededList:any =[];
  constructor(private foodService: FoodService, private route: ActivatedRoute, private cartService: CartService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.foodService.getFoodList().subscribe((res: any) => {
        this.foodList = res;
        this.bestSellingList = [...this.foodList.filter((food: any) => food.foodRatings >= 4.2)];
        this.recommenededList = [...this.foodList.filter((food:any)=> food.recommended == true)]
      })
    })
    // this.filterList = [...this.foodList.filter((food:any)=> food.foodRatings.includes(4.5))]
    // console.log(this.bestSellingList);

  }

  open(data: any) {
    var foodData = { desc : data.desc, image: data.foodImage, name: data.foodName, origin: data.origins, price: data.foodPrice, cookTime: data.cookTime, favorite: data.favorite, ratings: data.foodRatings }
    const modalRef = this.modalService.open(FoodComponent, { centered: true, size: 'xl' });
    modalRef.componentInstance.foodData = foodData;
    console.log(foodData)
  }

  addToCart(data: any) {
    var foodData = { image: data.foodImage, name: data.foodName, origin: data.origins, price: data.foodPrice, cookTime: data.cookTime, favorite: data.favorite, ratings: data.foodRatings }

    this.cartService.addProduct(foodData)
  }

  stars(){

  }
}
