import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfoModel } from 'src/app/modules/weather/models/weather-info.model';

interface WeatherCardModel{
  name:string;
  value:number | string;
}

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() data:WeatherInfoModel;

  constructor() { }

  ngOnInit(): void {
  }

  getWindContext():WeatherCardModel{
    return {
      name: "Wind Speed",
      value: this.data.windSpeed
    }
  } 

  getVisibilityContext():WeatherCardModel{
    return {
      name: "Visibility",
      value: this.data.visibility
    }
  } 

  getTemperatureContext():WeatherCardModel{
    return {
      name: "Temperature",
      value: this.data.temperature.value
    }
  } 

  getFeelsLikeContext():WeatherCardModel{
    return {
      name: "Feels Like",
      value: this.data.temperature.feelsLike
    }
  }
  
  getMinTemperatureContext():WeatherCardModel{
    return {
      name: "Minimum Temperature",
      value: this.data.temperature.minValue
    }
  } 

  getMaxTemperatureContext():WeatherCardModel{
    return {
      name: "Maximum Temperature",
      value: this.data.temperature.maxValue
    }
  } 

  getPressureContext():WeatherCardModel{
    return {
      name: "Pressure",
      value: this.data.pressure
    }
  } 

  getHumidityContext():WeatherCardModel{
    return {
      name: "Humidity",
      value: this.data.humidity
    }
  } 

}
