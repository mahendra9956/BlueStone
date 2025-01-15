import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { PlanDetailsComponent } from './plan-detail/plan-details/plan-details.component';
import { RecentlyViewedComponent } from './dashboard/recently-viewed/recently-viewed.component';
import { LocateStoreComponent } from './dashboard/locate-store/locate-store.component';
import { VideoCallComponent } from './dashboard/video-call/video-call.component';

const routes: Routes = [

  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "plan-page",
    component: PlanDetailsComponent
  },
  {
    path: "watch-jewellery",
    loadChildren: () => import('./watch-jewellery/watch-jewellery.module').then(m => m.WatchJewelleryModule)
  },
  {
    path: "login",
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: "signup",
    loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
  },
  {
    path:"recently-page",
    component:RecentlyViewedComponent
  },
  {
    path:"location-page",
    component:LocateStoreComponent
  },
  {
path:"video-page",
component:VideoCallComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
