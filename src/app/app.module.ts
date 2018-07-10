import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgHttpLoaderModule } from 'ng-http-loader'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { AppComponent } from './app.component';
import { OpenWeather } from '../services/openWeather.service';
import { Weather } from '../services/weather.utils';
import { CityComponent } from '../components/city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    AngularFontAwesomeModule,
    VirtualScrollModule
  ],
  providers: [OpenWeather, Weather],
  bootstrap: [AppComponent]
})
export class AppModule { }
