import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharmComponent } from './charm/charm.component';
import { BandComponent } from './band/band.component';
import { PinComponent } from './pin/pin.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { DialogVideoComponent } from './dialog-video/dialog-video.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: "charm",
    component: CharmComponent
  },
  {
    path: "band",
    component: BandComponent
  },
  {
    path: "pin",
    component: PinComponent
  },
  {
    path:"jewellery",
    component:JewelleryComponent
  },
  {
    path:"product-details",
    component:ProductDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchJewelleryRoutingModule { }
