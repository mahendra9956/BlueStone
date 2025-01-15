import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  panelOpenState = false;
  
  images: string[] = [
    'assets/dashboard/anklets.png',
    'assets/dashboard/blackets.png',
    'assets/dashboard/earrings.png',
    'assets/dashboard/nose.png',
    'assets/dashboard/ring.png'
  ];
  
  content: string[] = [
    'My first shopping with BlueStone was the Blanc Earring for him. Thanks to BlueStone.',
  ];

  currentIndex: number = 0;

  goToPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToNext(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
}
