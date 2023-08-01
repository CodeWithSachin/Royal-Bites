import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/FoodService/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  success() {
    Swal.fire({
      icon: 'success',
      title: 'Confirmed',
      text: 'Order Successfull',
      showConfirmButton: false,
      timer: 2000,
    })
    this.router.navigate(['/']);
    localStorage.removeItem('cartItem')
  }
  cancel(){
    Swal.fire({
      icon: 'error',
      title: 'Canceled',
      text: 'Payment Canceled',
      showConfirmButton: false,
      timer: 2000,
    })
    this.router.navigate(['/cart'])
  }
}
