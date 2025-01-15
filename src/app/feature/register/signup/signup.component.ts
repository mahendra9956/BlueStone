import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from '../../login/login-page/login-page.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isPopupVisible:boolean=true;

  constructor(private dailogLogin:MatDialog){}

  openLonginDailog(){
  this.isPopupVisible=!this.isPopupVisible;
    this.dailogLogin.open(LoginPageComponent)

  }

  closeDailog(){
    this.dailogLogin.closeAll();
  }
}
