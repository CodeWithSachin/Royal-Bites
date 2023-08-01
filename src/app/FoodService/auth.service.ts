import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private fireAuth:AngularFireAuth) { }

  login(email:string, password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','hsvahvchas');
      this.router.navigate(['/'])
    }, err =>{
      alert("Something went wrong!")
      this.router.navigate(['/login'])
    })
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      this.router.navigate(['/']);
      localStorage.setItem('token', '');
    })
  }

  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(()=>{
      alert('Registration Successful')
      this.router.navigate(['/login'])
    }, err =>{
      alert(err.message);
      this.router.navigate(['/register'])
    })
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token')
  }

  google(){
    // this.fireAuth.signInWithPopup(new firebase GoogleAuthProvider())
  }

}
