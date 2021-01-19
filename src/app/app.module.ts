import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './components/app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { DetailsBoxComponent } from './components/details-box/details-box.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import {FilterPipe}  from './filters';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { AppState } from './state/app.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CityListComponent,
    DetailsBoxComponent,
    WeatherInfoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
