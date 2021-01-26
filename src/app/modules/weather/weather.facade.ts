import { Injectable } from "@angular/core";
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { AddCity, UpdateWeatherInfo } from "./actions/weather.actions";
import { CityModel } from "./models/city.model";
import { WeatherModel } from './models/weather.model';
import { WeatherState } from "./state/weather.state";

@Injectable()
export  class WeatherFacade {
    
    @Select(WeatherState)
    public data$:Observable<WeatherModel>;
  
    constructor() {}

    getState():Observable<WeatherModel>{
        return this.data$;
    }
    
    @Dispatch()
    addCity(city:CityModel):AddCity{     
        return new AddCity(city);
    }

    @Dispatch()
    updateWeatherInfo(city:CityModel):UpdateWeatherInfo{
        return new UpdateWeatherInfo(city);
    }
}