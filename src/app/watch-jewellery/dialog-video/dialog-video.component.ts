import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-video',
  templateUrl: './dialog-video.component.html',
  styleUrls: ['./dialog-video.component.scss']
})
export class DialogVideoComponent {

  constructor(private router:Router){}


  closePage(){
  this.router.navigate(['/watch-jewellery/product-details']);
  }

}
