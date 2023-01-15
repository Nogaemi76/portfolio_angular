import { Component, Input, OnInit } from '@angular/core';
import { SlideInterface } from './slide.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit  {

  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  currentSlide: any;

  ngOnInit(): void {
    this.currentSlide = this.slides[this.currentIndex];
  }

  goToNextSlide() {
    if (this.currentIndex === this.slides.length - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.currentSlide = this.slides[this.currentIndex];
  }

  goToPrevSlide() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.slides.length - 1;
    } else {
      this.currentIndex--;
    }
    this.currentSlide = this.slides[this.currentIndex];
  }

  goToSlide(index: number) {
    this.currentSlide = this.slides[index];
  }
}
