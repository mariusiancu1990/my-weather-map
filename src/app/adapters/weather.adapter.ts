import { Injectable } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather.model';

@Injectable()
export class WeatherAdapter{

    adapt(item:any):WeatherModel{
        return {
            temperature:{
                value:item.main.temp,
                minValue:item.main.temp_min,
                maxValue:item.main.temp_max,
                feelsLike:item.main.feels_like
            },
            pressure:item.main.pressure,
            humidity:item.main.humidity,
            visibility:item.visibility,
            windSpeed:item.wind.speed  
        }
    }
}