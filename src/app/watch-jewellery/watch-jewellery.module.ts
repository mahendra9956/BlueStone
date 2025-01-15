import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchJewelleryRoutingModule } from './watch-jewellery-routing.module';
import { CharmComponent } from './charm/charm.component';
import { BandComponent } from './band/band.component';
import { PinComponent } from './pin/pin.component';
import { SharedModule } from '../shared/shared/shared.module';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { DialogVideoComponent } from './dialog-video/dialog-video.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    CharmComponent,
    BandComponent,
    PinComponent,
    JewelleryComponent,
    DialogVideoComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    WatchJewelleryRoutingModule,
    SharedModule,
    
  ]

})
export class WatchJewelleryModule { }
