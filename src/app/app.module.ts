import { WeatherAdapter } from './adapters/weather.adapter';
import { WeatherService } from 'src/app/services/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { DetailsBoxComponent } from './components/details-box/details-box.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { AppComponent } from './app.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCity, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app.state';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { CityModalComponent } from './components/city-modal/city-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityListComponent,
    DetailsBoxComponent,
    WeatherInfoComponent,
    CityItemComponent,
    CityModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    })
  ],
  providers: [FaIconLibrary, WeatherService, WeatherAdapter, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCity, faPlus);
  }
}
