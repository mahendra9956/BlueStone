import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ForgotComponent } from '../forgot/forgot.component';
import { SignupComponent } from '../../register/signup/signup.component';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent {

  constructor(private cancelDailog: MatDialogRef<LoginEmailComponent>, private dailog: MatDialog) { }

  cancelLogin() {
    this.cancelDailog.close();
  }
  openForgot(){
    this.dailog.open(ForgotComponent)
  }


  openSignupPage(){
    this.dailog.open(SignupComponent)
  }

}
