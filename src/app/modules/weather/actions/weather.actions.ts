import { CityModel } from '../models/city.model';

export class AddCity {
    static readonly type = '[WEATHER] ADD CITY'
    constructor(public city:CityModel){}
}

export class UpdateWeatherInfo {
    static readonly type = '[WEATHER] UPDATE WEATHER_INFO'
    constructor(public city:CityModel){}
}
