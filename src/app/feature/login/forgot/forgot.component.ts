import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {

  constructor(private dilogClose: MatDialogRef<ForgotComponent>) { }

  closeFogrotPage() {
    this.dilogClose.close();
  }

}
