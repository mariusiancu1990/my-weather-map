export class Weather {
  timezone: 0;
  id: 2643743;
  name: 'London';
  cod: 200;
  base: 'stations';
  visibility: 7000;
  dt: 1610625805;
  coord: {
    lon: -0.1257;
    lat: 51.5085;
  };
  weather: {
    id: 804;
    main: 'Clouds';
    description: 'overcast clouds';
    icon: '04d';
  };

  main: {
    temp: 278.07;
    feels_like: 271.69;
    temp_min: 277.04;
    temp_max: 278.71;
    pressure: 1013;
    humidity: 93;
  };

  wind: {
    speed: 7.2;
    deg: 80;
  };
  clouds: {
    all: 90;
  };

  sys: {
    type: 1;
    id: 1414;
    country: 'GB';
    sunrise: 1610611205;
    sunset: 1610641121;
  };
}
