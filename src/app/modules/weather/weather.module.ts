import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCity, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { WeatherAdapter } from './adapters/weather.adapter';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityModalComponent } from './components/city-modal/city-modal.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherComponent } from './containers/weather/weather.component';
import { WeatherService } from './services/weather/weather.service';
import { WeatherState } from './state/weather.state';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherFacade } from './weather.facade';

@NgModule({
  declarations: [
    WeatherComponent,
    CityListComponent,
    WeatherInfoComponent,
    CityModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    NgxsModule.forFeature([WeatherState])
  ],
  providers: [
    WeatherService, 
    WeatherAdapter,
    WeatherFacade,
    FaIconLibrary
  ],
})
export class WeatherModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCity, faPlus, faMinus);
  }
 }
