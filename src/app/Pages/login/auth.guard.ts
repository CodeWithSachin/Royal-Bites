import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/FoodService/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard  {

  constructor(private auth:AuthService, private router:Router){

  }

  canActivate() {
    if(this.auth.IsLoggedIn()){
      return true;
    }
    this.router.navigate(['auth']);
      return false;
  }
  
}
