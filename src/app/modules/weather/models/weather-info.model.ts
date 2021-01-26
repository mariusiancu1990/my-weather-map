
export class GeneralInfoModel {
    updateTime?:number;
    sunrise?:number;
    sunset?:number;
    timezone?:number;
}

export class TemperatureInfoModel{
    value?:number;
    minValue?:number;
    maxValue?:number;
    feelsLike?:number;
}

export class CoordinatesInfoMoel {
    longitude?:number;
    latitude?:number;
}

export class CloudsInfoModel {
    value?:number;
    type?:string;
}

export class WeatherInfoModel{
    general?:GeneralInfoModel;
    temperature?:TemperatureInfoModel;
    coordinates?:CoordinatesInfoMoel;
    clouds?:CloudsInfoModel;
    pressure?:number;
    humidity?:number;
    visibility?:number;
    windSpeed?:number
}