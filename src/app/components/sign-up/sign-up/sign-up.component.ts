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
  passwordMatches: boolean = true;
  isinvalid: boolean = false;
  
  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.validatePasswordMatch()){
      this.signUpService.addNewUser(this.user).subscribe( response => {console.log(response)},
      error => {alert("The username is already taken");}
      
      );
      this.router.navigate(['']);
    }else {
      this.passwordMatches = false;
    }
    
  }

  goBack() {
    this.router.navigate(['']);  
  }

  validatePasswordMatch(): boolean {
    
    if(this.user.userPassword === this.retypePassword){
      return true;
    } else {
      return false;
    }
     
  }
}
