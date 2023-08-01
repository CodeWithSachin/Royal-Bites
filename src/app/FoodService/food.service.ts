import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  url:any= "../../assets/Data/Food.json";
  constructor(private http:HttpClient) { }


  getTags(){
    return [
      {"name": "All"        , "count": 22},
      {"name": "Breakfast"  , "count": 3},
      {"name": "Main Course", "count": 12},
      {"name": "Fastfood"   , "count": 5},
      {"name": "Beverage"   , "count": 4},
      {"name": "Desert"     , "count": 2},
      {"name": "Sweet"      , "count": 1},
    ]
  }
  getBestSellingFood(){
    return this.http.get(this.url).pipe(filter((food:any)=> food.foodRatings.includes(4.5)))
  }
  getFoodList(){
    return this.http.get(this.url);
  }

}
