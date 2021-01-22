import { CityModel } from './models/city.model';

export class AddCity {
    static readonly type = '[APP] ADD CITY'
    constructor(public city:CityModel){}
}

export class GetWeatherInfo {
    static readonly type = '[APP] GET WEATHER_INFO'
    constructor(public city:CityModel){}
}
