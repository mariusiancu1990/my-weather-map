import { WeatherModel } from './../../models/weather.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/modules/weather/models/city.model';
import { CityListComponent } from '../../components/city-list/city-list.component';
import { CityModalComponent } from '../../components/city-modal/city-modal.component';
import { WeatherInfoModel } from '../../models/weather-info.model';
import { WeatherFacade } from '../../weather.facade';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public data$:Observable<WeatherModel>;

  @ViewChild("cityModal") 
  private cityModalComponent:CityModalComponent;
  @ViewChild("cityList") 
  private cityListComponent:CityListComponent;
  private updateInterval:any;
  
  constructor(private weatherFacade:WeatherFacade) { }

  ngOnInit(): void { 
    this.data$ = this.weatherFacade.getState();        
  }

  ngOnDestroy():void{
    clearInterval(this.updateInterval);
  }

//#region Options Event Handlers 

  onAddCityClickHandler():void{
    this.cityModalComponent.open();
  }

  onAUPMValueChangeHandler(value:boolean):void{
    if(this.cityListComponent.getSelectedCity() && value){
      this.updateInterval = setInterval(()=>{
        this.weatherFacade.updateWeatherInfo(this.cityListComponent.getSelectedCity());
      }, 6000);
    }else{
      clearInterval(this.updateInterval);
    }    
  }

//#endregion

//#region City List Event Handlers 

  onCitySelectHandler(city:CityModel):void{
    this.weatherFacade.updateWeatherInfo(city);
  }

//#endregion

//#region Modal Event Handlers 

  onCityAddHandler(city:CityModel):void{     
    if(this.cityListComponent.containsCity(city)) return;
    
    this.weatherFacade.addCity(city);
    this.cityListComponent.setSelectedCity(city);
  }

//#endregion

}
