import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardData } from '../../../shared/mocks/cards/data';

interface Data {
  id: number;
  image: string;
  images: string[];
  title: string;
  description: string;
  incluye: string[];
  noIncluye: string[];
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  data!: Data;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = cardData.find(
      (data: Data) => data.id == this.route.snapshot.params['id']
    );
    console.log(this.data);
  }
}
