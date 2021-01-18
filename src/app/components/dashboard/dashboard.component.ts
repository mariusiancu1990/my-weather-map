import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedCityIndex:number = 0;  
  allCities:Array<string> = [];
  myCities:Array<string>=[];

  constructor(private ngbModal: NgbModal, private weatherData:WeatherService) { }

  ngOnInit(): void {
    
    this.allCities = this.weatherData.getAvailableCities();
  }

  openModal(content:any):void{
    this.ngbModal.open(content, { centered: true });
  }

  onAddCity():void{
    const selectedCity:string = this.allCities[this.selectedCityIndex]
    if(this.myCities.indexOf(selectedCity) < 0){
      this.myCities.push(selectedCity);
      this.ngbModal.dismissAll();
    }
  }

  canAdd():boolean{
    const selectedCity:string = this.allCities[this.selectedCityIndex];
    return this.myCities.indexOf(selectedCity) < 0;
  }

}
