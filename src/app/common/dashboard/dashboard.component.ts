import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  

  slides = [
    { imageUrl: 'assets/images/unnamed.jpg' ,description: ''},
    { imageUrl: 'assets/images/unnamed (1).jpg', description: ''},
    { imageUrl: 'assets/images/unnamed (2).jpg', description: ''},
  
  ];
  currentSlideIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }


}