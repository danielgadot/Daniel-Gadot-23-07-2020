import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  @Input() weatherData;

  ngOnInit(): void {
  }

  fahrenheitToCelsius(fahrenheit) {
    return parseInt(String((fahrenheit - 32) * 5 / 9));
  }
}
