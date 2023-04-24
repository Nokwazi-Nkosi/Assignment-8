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
    // Retrieve the JSON string from local storage and parse it back to an object
    const storedJson = localStorage.getItem('userDetails');
    console.log(storedJson);
    
    // Retrieve existing user array from local storage
// const existingUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
    type User = {
      userFirstName: string;
      userEmail: string;
      userPassword: string;
    }

    if (storedJson !== null) {
      const storedObject = JSON.parse(storedJson);
      // console.log(storedObject);
      // Find user with matching email/username and password
      const matchedUser = storedObject.find((user: User) => {
        return user.userEmail === this.loginEmail && user.userPassword === this.loginPassword;
      });
      // console.log(matchedUser, 'matchedUser');
      
      let userEmail = storedObject.userEmail;
      let userPass = storedObject.userPassword;
      //some validation
      if(matchedUser === undefined){//supplied information is incorrect
        if(this.loginEmail === "" || this.loginPassword === ""){
          alert("Your Email or Password cannot be empty");
        }else if (userEmail !== this.loginEmail || userPass !== this.loginPassword) {
          alert("Your email or password is incorrect");
        }
      }else if(matchedUser !== undefined){//means there was user match
        //login success message
        alert("you are logged in")
      }
      
    
    }else{
      alert("Please Register");
      this.router.navigate(['register']);
    }
  }
    //navigate to the registration page
   /* registrationPage(){
      document.location = "http://localhost:4200/register";
    }*/
  }

    
