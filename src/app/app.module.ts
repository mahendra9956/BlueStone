import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { SharedModule } from './shared/shared/shared.module';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { PlanDetailsComponent } from './plan-detail/plan-details/plan-details.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RouterOutlet } from '@angular/router';
import { VideoCallComponent } from './dashboard/video-call/video-call.component';
import { RecentlyViewedComponent } from './dashboard/recently-viewed/recently-viewed.component';
import { LocateStoreComponent } from './dashboard/locate-store/locate-store.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PlanDetailsComponent,
    VideoCallComponent,
    RecentlyViewedComponent,
    LocateStoreComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CanvasJSAngularChartsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
