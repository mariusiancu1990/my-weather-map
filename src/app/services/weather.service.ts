import { MainWeatherInfo } from './../core/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getAvailableCities():Array<string>{
    return [
      "London",
      "Bucharest"
    ]
  }

  getMainInfo():MainWeatherInfo{
    return {
      temp: 279.91,
      feels_like: 275.49,
      temp_min: 279.26,
      temp_max: 280.37,
      pressure: 1020,
      humidity: 76 
    };;
  }

  getVisibilityInfo():number{
    return 1000
  }
}
