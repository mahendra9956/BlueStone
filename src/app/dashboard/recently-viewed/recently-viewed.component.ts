import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVideoComponent } from 'src/app/watch-jewellery/dialog-video/dialog-video.component';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss']
})
export class RecentlyViewedComponent {

  constructor(public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogVideoComponent, {
      width: '300px',
    });
  }
}
