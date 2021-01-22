import { CityListComponent } from './../city-list/city-list.component';
import { CityModalComponent } from './../city-modal/city-modal.component';
import { AddCity, GetWeatherInfo } from './../../app.actions';
import { AppState } from './../../app.state';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/models/city.model';
import { WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Select(AppState.allCities)
  allCities$:Observable<CityModel[]>;

  @Select(AppState.myCities) 
  myCities$:Observable<CityModel[]>;

  @Select(AppState.weatherInfo) 
  weatherInfo$:Observable<WeatherModel[]>;

  @ViewChild("cityModal") cityModalComponent:CityModalComponent;
  @ViewChild("cityList") cityListComponent:CityListComponent;
 
  private updateInterval:any;

  constructor(private store:Store) { }

  ngOnInit(): void { }

  ngOnDestroy():void{
    clearInterval(this.updateInterval);
  }

  openModal():void{
    this.cityModalComponent.open();
  }

  addCity(city:CityModel):void{     
    if(this.cityListComponent.containsCity(city)) return;
    this.store.dispatch(new AddCity(city));
    this.cityListComponent.setSelectedCity(city);
  }

  getWeatherInfo(city:CityModel):void{
    this.store.dispatch(new GetWeatherInfo(city));
  }

  setAutoUpdate(value:boolean):void{
    if(this.cityListComponent.getSelectedCity() && value){
      this.updateInterval = setInterval(()=>{
        this.store.dispatch(new GetWeatherInfo(this.cityListComponent.getSelectedCity()));
      }, 6000);
    }else{
      clearInterval(this.updateInterval);
    }    
  }
}
