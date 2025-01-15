import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVideoComponent } from '../dialog-video/dialog-video.component';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogVideoComponent, {
      width: '300px',
    });
  }

}
