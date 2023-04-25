import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail: string ="";
  loginPassword: string="";

  constructor(private router:Router){}



  login(){
  
    if (this.loginEmail ==="" || this.loginPassword ===""){
      alert("Please enter your email and password")
      return;
    }
const existingUser = JSON.parse(localStorage.getItem('userDetails') as string)|| [];
const userExists = existingUser.some((user:{loginEmail:string;}) =>user.loginEmail === this.loginEmail) 
if(userExists){
this.router.navigate(['home'])
alert('You are logged in');
return;
}else{
  alert('Please Register');
  this.router.navigate(['register'])
}
  }
  createAccount(){
    this.router.navigate(['register']);
  }


}


    
