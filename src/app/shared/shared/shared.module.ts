import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
const materialComponentsModules=[
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCardModule,
  MatRadioModule,
  MatDividerModule,
  MatDialogModule,
  MatExpansionModule
  
]

@NgModule({
  declarations: [],
  imports: [
    materialComponentsModules

  ],
  exports:[materialComponentsModules]
})
export class SharedModule { }
