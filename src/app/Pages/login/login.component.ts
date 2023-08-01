import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/FoodService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:any = '';
password:any= '';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email==''){
      alert('Please Enter email!');
      return;
    }
    if(this.password==''){
      alert('Please Enter Password!');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }

}
