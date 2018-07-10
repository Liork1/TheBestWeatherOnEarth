import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OpenWeather {

    private OPEN_WEATHER_DOMAIN = 'http://api.openweathermap.org/data/2.5/';
    private BBOX_API = 'box/city?bbox=';
    private APP_ID = '4ee3ac3ce2b2461555028c24473caa74';

    constructor(private http: HttpClient) {}
    
    public getBboxCities(lonLeft: number,latBottom: number,lonRight: number,latTop: number,zoom: number) : Observable<any> {
        let bboxParams = `${lonLeft},${latBottom},${lonRight},${latTop},${zoom}`;
        let request = `${this.OPEN_WEATHER_DOMAIN}/${this.BBOX_API}${bboxParams}&appid=${this.APP_ID}`;
        return this.http.get(request);
    }
}