import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { MainComponent } from './Pages/main/main.component';

import {HttpClientModule} from '@angular/common/http';
import { FoodComponent } from './FoodModal/food/food.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './Pages/about/about.component';
import { CartComponent } from './Pages/cart/cart.component';
import { CartItemComponent } from './Pages/cart-item/cart-item.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { FoodlistComponent } from './Pages/foodlist/foodlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FoodComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    CartComponent,
    CartItemComponent,
    PaymentComponent,
    FoodlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
