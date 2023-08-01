import { keyframes } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodComponent } from 'src/app/FoodModal/food/food.component';
import { AuthService } from 'src/app/FoodService/auth.service';
import { CartService } from 'src/app/FoodService/cart.service';
import { FoodService } from 'src/app/FoodService/food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchItem: any = '';
  foodList: any = [];
  filterList: any;
  foodData :any;
  tags: any;
  // tagValue:any;

  constructor(private foodService: FoodService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute, public authService: AuthService, private cartService: CartService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getTags()
    
    
    this.route.params.subscribe(() => {
      this.foodService.getFoodList().subscribe((res: any) => {
        this.foodList = res;
        this.filterList = [...this.foodList]
      })
    })
    // console.log(this.filterList)
  }


  open(data: any) {
    var foodData = { desc : data.desc, image: data.foodImage, name: data.foodName, origin: data.origins, price: data.foodPrice, cookTime: data.cookTime, favorite: data.favorite, ratings: data.foodRatings }
    const modalRef = this.modalService.open(FoodComponent, { centered: true, size: 'xl' });
    modalRef.componentInstance.foodData = foodData;
    console.log(foodData)
  }
  search() {
    if (this.searchItem == '') {
      this.foodService.getFoodList().subscribe((res: any) => {
        this.foodList = res;
        this.filterList = [...this.foodList]
      })
    }
    else {
      this.filterList = [...this.foodList.filter((food: any) => food.foodName.toLowerCase().includes(this.searchItem))];
    }
  }
  tagList(tagValue: any) {
    if (tagValue == 'All') {
      this.foodService.getFoodList().subscribe((res: any) => {
        this.foodList = res;
        this.filterList = [...this.foodList]
        console.log('this.filterList')
      })
    }
    else {
      this.filterList = [...this.foodList.filter((food: any) => food.tags.includes(tagValue))]
      console.log(this.filterList);
    }
  }
  addToCart(data:any) {
    var foodData = { image: data.foodImage, name: data.foodName, origin: data.origins, price: data.foodPrice, cookTime: data.cookTime, favorite: data.favorite, ratings: data.foodRatings }

    this.cartService.addProduct(foodData)
  }
}


