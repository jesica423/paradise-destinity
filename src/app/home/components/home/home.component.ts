import { Component } from '@angular/core';
import { cardData } from '../../../shared/mocks/cards/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  get data() {
    return cardData;
  }
}
