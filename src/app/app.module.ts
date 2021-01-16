import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { DetailsBoxComponent } from './components/details-box/details-box.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { AppComponent } from './app.component';
import { CityItemComponent } from './components/city-item/city-item.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityListComponent,
    DetailsBoxComponent,
    WeatherInfoComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [FaIconLibrary],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCoffee);
  }
}
