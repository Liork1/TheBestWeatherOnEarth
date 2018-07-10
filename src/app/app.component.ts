import { Component, OnInit } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { OpenWeather } from '../services/openWeather.service';
import { Weather } from '../services/weather.utils';
import { CityComponent } from '../components/city.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private cities = [];

  private date: Date;
  private tempBaseLine: number = 21;  
  private humidityBaseLine: number = 50;

  constructor(private openWeather: OpenWeather, 
              private weather: Weather,
              private spinnerService: SpinnerVisibilityService
            ) {
  }

  ngOnInit() {
    this.getTheBestWeather('male');
  }

  private getTheBestWeather(gender: string) {
    if (gender === 'male') {
      this.tempBaseLine = 21;
    } else {
      this.tempBaseLine = 22;
    }

    this.spinnerService.show();    
    this.openWeather.getBboxCities(85,-180,-85,185,10)
    .subscribe(data => {
      this.cities = data.list;
      //since the expected list is very big (~15k), 
      //I took an asuumption that I can filter by temp and humidity rang before passing it to the component
      this.cities = this.weather.filterByRange(this.cities,'temp', this.tempBaseLine-1, this.tempBaseLine+1);
      this.cities = this.weather.filterByRange(this.cities,'humidity', this.humidityBaseLine-5, this.humidityBaseLine + 5);

      this.cities = this.weather.sortCitiesByTempAndHumidity(this.cities, this.tempBaseLine, this.humidityBaseLine);

      this.date = new Date();
      this.spinnerService.hide();      
    },
    error => {
      console.log (`Error on calling getBboxCities. Error: ${error}`)
    });
  }
}
