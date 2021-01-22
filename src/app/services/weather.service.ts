import { WeatherModel } from 'src/app/models/weather.model';
import { WeatherAdapter } from './../adapters/weather.adapter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private baseURL:string = 'http://api.openweathermap.org/data/2.5/weather';
  private appID:string = 'e9ea437b2d8579ed3fcc1700cf2ee7b4';

  constructor(private http:HttpClient, private weatherAdapter:WeatherAdapter) { }

  fetchWheatherInfo(city:CityModel):Observable<WeatherModel>{   
    const url:string =  `${this.baseURL}?q=${city.name}&appid=${this.appID}`;
    return this.http.get(url).pipe(
      map((data:any)=> this.weatherAdapter.adapt(data))
    );
  }
}
