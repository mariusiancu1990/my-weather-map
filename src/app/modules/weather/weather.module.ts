import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { DetailsBoxComponent } from './components/details-box/details-box.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CityPopupComponent } from './components/city-popup/city-popup.component';


@NgModule({
  declarations: [
    WeatherComponent,
    CityListComponent,
    DetailsBoxComponent,
    WeatherInfoComponent,
    AddButtonComponent,
    CityPopupComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
  ]
})
export class WeatherModule { }
