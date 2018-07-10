
import { Injectable} from '@angular/core';

export class Weather {
    /*
        filterByRange - filter the list of cities according to input propery in city main object
        input: cities: list of cities
            proprty: the property to filter by
            minValue: the minimum value
            maxValue : the maximum value
        output: list of filtered citeis
     */
    public filterByRange(cities: any[], property: string, minValue: number, maxValue: number): any[] {
        return cities.filter( city => city.main[property]>= minValue && city.main[property] <= maxValue);
    }

    /*
        filterByRange - sort cities by the following order
            - temp value is 21
            - the closes temp abs value to 21 
            - humidity value is 55
            - the closest humidity abs value to 55 
        input: list of cities, temp to use as baseline, humidity to use as baseline
        output: list of sorted cities
     */
    public sortCitiesByTempAndHumidity(cities: any[], temp: number, humidity: number) : any[]  {

        cities.forEach(city => {
            city['tempDelta'] = Math.abs(city.main.temp - temp)
            city['humidityDelta'] = Math.abs(city.main.humidity - humidity)
        })
        return cities.sort((city1, city2) => {
           if (city1.tempDelta > city2.tempDelta) return 1;
           if (city1.tempDelta < city2.tempDelta) return -1;

           if (city1.humidityDelta > city2.humidityDelta) return 1;
           if (city1.humidityDelta < city2.humidityDelta) return -1;
           
           return 1;     
        })
    }
}