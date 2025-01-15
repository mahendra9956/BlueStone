import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  {
    path:"login-page",
    component:LoginPageComponent
  },
  {
    path:"forgot",
    component:ForgotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
