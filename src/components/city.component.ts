import { Component, Input } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

  @Input() city: any;
  @Input() date: Date;
  constructor() {
  }

  get icon(): string{
      return `http://openweathermap.org/img/w/${this.city.weather[0].icon}.png`;
  }
}
