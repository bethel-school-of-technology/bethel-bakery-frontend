import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { SignUpService } from 'src/app/services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User = new User;
  retypePassword: string = ""; 
  isinvalid: boolean = false;
  
  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.validate()){
      this.signUpService.addNewUser(this.user).subscribe( response => {console.log(response)},
      error => {this.isinvalid = true}
      
      );
      this.router.navigate(['']);
    }else {
      this.isinvalid = true;
    }
    
  }

  goBack() {
    this.router.navigate(['']);  
  }

  validate(): boolean {
    let isValid: boolean = false;
    if(this.user.userName != "" && this.user.userFirstName != "" && this.user.userLastName && this.user.userPassword != ""){
      if(this.user.userPassword === this.retypePassword){
        isValid = true;
      }
    } 

    return isValid;
  }
}
