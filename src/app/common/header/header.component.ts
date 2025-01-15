import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from 'src/app/feature/login/login-page/login-page.component';
import { SignupComponent } from 'src/app/feature/register/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private dailog: MatDialog) { }


  @ViewChild('header') header!: ElementRef;
  stickyOffset!: number;

  ngAfterViewInit() {
    this.stickyOffset = this.header.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.pageYOffset > this.stickyOffset) {
      this.header.nativeElement.classList.add('sticky');
    } else {
      this.header.nativeElement.classList.remove('sticky');
    }
  }

  openLoginPageDailog() {
    this.dailog.open(LoginPageComponent)
  }
  openSignupPageDailog() {
    this.dailog.open(SignupComponent)
  }

}