import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginEmailComponent } from '../login-email/login-email.component';
import { SignupComponent } from '../../register/signup/signup.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  

  constructor(private dialogLoginWithEmail: MatDialog) { }

  openLoginWithEmail() {
  
    this.dialogLoginWithEmail.open(LoginEmailComponent, {
    });
  }

  openSignupDailog(){
    this.dialogLoginWithEmail.closeAll();
    this.dialogLoginWithEmail.open(SignupComponent,{
    
    });
  }

  closeDailog(){
    this.dialogLoginWithEmail.closeAll();
  }



}
