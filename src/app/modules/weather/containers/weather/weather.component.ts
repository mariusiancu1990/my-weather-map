import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityPopupComponent } from '../../components/city-popup/city-popup.component';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})

export class WeatherComponent implements OnInit {
  @ViewChild('cityPopup')
  cityPopupComponent: CityPopupComponent; 

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.cityPopupComponent.open();
  }

}
