import { Injectable } from '@angular/core';
import { WeatherInfoModel } from 'src/app/modules/weather/models/weather-info.model';

@Injectable()
export class WeatherAdapter{

    adapt(item:any):WeatherInfoModel{
        return {
            general:{
                updateTime: item.timezone,
                sunrise: item.sys.sunrise,
                sunset: item.sys.sunset,
                timezone: item.timezone
            },
            coordinates:{
                longitude: item.coord.lon,
                latitude: item.coord.lat
            },
            clouds:{
                value: item.clouds.all
            },
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