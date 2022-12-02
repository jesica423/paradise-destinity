import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ViewComponent } from './components/view/view.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, ViewComponent, CarouselComponent],
  imports: [CommonModule, RouterModule],
})
export class HomeModule {}
