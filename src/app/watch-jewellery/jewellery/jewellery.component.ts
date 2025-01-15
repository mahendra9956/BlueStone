import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVideoComponent } from '../dialog-video/dialog-video.component';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogVideoComponent, {
      width: '300px',
    });
  }


}
