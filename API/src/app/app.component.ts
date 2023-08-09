import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData!: WeatherData;
  cityName = 'London';
  tempIsHot = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  onSubmit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService
      .getWeatherData(this.cityName)
      .subscribe((response: WeatherData) => {
        this.weatherData = response;
        this.tempIsHot = this.weatherData.current.temp_c <= 15 ? false : true;
      });
  }
}
