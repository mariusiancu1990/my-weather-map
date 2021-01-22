export class TemperatureModel{
    value?:number;
    minValue?:number;
    maxValue?:number;
    feelsLike?:number;
}

export class WeatherModel{
    temperature?:TemperatureModel;
    pressure?:number;
    humidity?:number;
    visibility?:number;
    windSpeed?:number
}