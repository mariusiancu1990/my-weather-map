import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CityModel } from '../../models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  @Input() 
  public data:Array<CityModel>=[];

  @Output()
  public select:EventEmitter<CityModel> = new EventEmitter<CityModel>();

  private selectedCity:CityModel = null;

  constructor() { }

  ngOnInit(): void { }

  getSelectedCity():CityModel{
    return this.selectedCity;
  }

  setSelectedCity(city:CityModel):void{
    this.selectedCity = city;
    this.select.emit(this.selectedCity);
  }

  containsCity(city:CityModel):boolean{
    let result:boolean = false;
    this.data.forEach((elem:CityModel)=>{
      if(elem.id == city.id){
        result = true;
        return;
      }
    })
    return result;
  }
}
