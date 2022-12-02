import { Component, Input } from '@angular/core';
import { carouselData } from '../../../shared/mocks/carousel';

interface Carousel {
  image: string;
  title: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  get data() {
    return carouselData;
  }
}
