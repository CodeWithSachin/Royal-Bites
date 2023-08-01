import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Pages/cart/cart.component';
import { LoginComponent } from './Pages/login/login.component';
import { MainComponent } from './Pages/main/main.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'cart', component:CartComponent},
  {path:'payment', component:PaymentComponent},
  {path:'search/:searchItem', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
