import { Component, OnInit, ViewChild } from '@angular/core';
import { CityPopupComponent } from '../../components/city-popup/city-popup.component';
import { faAngleRight, faUserSecret, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';
import {Select} from '@ngxs/store';
import { Observable } from 'rxjs';
import { WeatherState } from '../../state/weather.state';
import { WeatherModel } from '../../models/weather.model';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})

export class WeatherComponent implements OnInit {
  faAngleRight = faAngleRight;
  faUserSecret = faUserSecret;
  faLaptopHouse = faLaptopHouse;
  @ViewChild('cityPopup')
  cityPopupComponent: CityPopupComponent; 
  @Select(WeatherState)
  data$: Observable<WeatherModel>
  constructor() { }

  ngOnInit(): void {
  }
  
  addCity(){

  }
  open() {
    this.cityPopupComponent.open();
  }

}
