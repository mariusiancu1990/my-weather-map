import { CityModel } from './city.model';
import { WeatherInfoModel } from './weather-info.model';

export class WeatherModel{
    allCities?:Array<CityModel>
    myCities?:Array<CityModel>
    weatherInfo?:WeatherInfoModel
}
