import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  firstName: string = "";
  yourEmail: string = "";
  lastName: string = "";
  yourPhone: string = "";
  password: string = "";
  enterYourAnswer: string = "";
  gender: string = "";
  confirmPassword: string = "";
  pleaseSelectYourSecurityQuestion: string = "";
  whatIsYourPhysicalAddress: string = "";
  whatIsYourIdentityNumber: string = "";


  constructor(private router: Router) { };

  register() {
    //some validation
    if (this.password === "" || this.yourEmail === "" || this.firstName === "") {
      alert("Your Email, First Name or Password cannot be empty");
    } else if (this.password !== this.confirmPassword) {
      alert("Your Password does not match");
    } else {


      // Get user input
      const firstName = this.firstName;
      const email = this.yourEmail;
      const password = this.password;


      // Create user object
      const userObject = {
        userFirstName: this.firstName,
        userEmail: this.yourEmail,
        userPassword: this.password,
        userPhone: this.yourPhone,
        userAnswer: this.enterYourAnswer,
        userGender: this.gender,
        userCornfPass: this.confirmPassword,
      };

      // Get existing user array from local storage or create an empty array
      const userRegObj = localStorage.getItem('userDetails');
      alert("hello")
      if (userRegObj !== null) {
        // const existingUsers = JSON.parse(userRegObj) || []
        const existingUsers = JSON.parse(userRegObj);

        // Add new user object to the array
        existingUsers.push(userObject);

        // Convert the array back to a JSON string and store it in local storage
        const userObjStr = JSON.stringify(existingUsers);
        localStorage.setItem('userDetails', userObjStr);

        alert("Successfully Registered, please login");
      } else {
        const existingUsers = [];

        // Add new user object to the array
        existingUsers.push(userObject);

        // Convert the array back to a JSON string and store it in local storage
        const userObjStr = JSON.stringify(existingUsers);
        localStorage.setItem('userDetails', userObjStr);

        alert("Successfully Registered, please login");
        this.router.navigate(['login']);

      }


    }

  }

  //navigate to the login page
  loginPage() {
    document.location = "http://localhost:4200/login";
  }



}
