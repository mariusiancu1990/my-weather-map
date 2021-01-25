import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { DetailsBoxComponent } from './components/details-box/details-box.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CityPopupComponent } from './components/city-popup/city-popup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { WeatherState } from './state/weather.state';

@NgModule({
  declarations: [
    WeatherComponent,
    CityListComponent,
    DetailsBoxComponent,
    WeatherInfoComponent,
    AddButtonComponent,
    CityPopupComponent,
    
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    FontAwesomeModule,
    NgxsModule.forRoot([WeatherState], {
      developmentMode: !environment.production
    })
    
  ]
})
export class WeatherModule { }
