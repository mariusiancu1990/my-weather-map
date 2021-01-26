import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CityModel } from 'src/app/modules/weather/models/city.model';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss']
})
export class CityModalComponent implements OnInit{

  //Public Properties
  @Input() 
  public data:Array<CityModel> = [];
  @Output() 
  public add:EventEmitter<CityModel> = new EventEmitter<CityModel>();
  public selectedCity:CityModel;

  //Private Properties
  @ViewChild('modalTemplate') 
  private modalTemplateRef:TemplateRef<CityModalComponent>;
  private modalRef:NgbModalRef;

  constructor(private ngbModal:NgbModal){}

  ngOnInit():void{ 
    this.selectedCity = this.data[0];
  }

  open():void{
    this.modalRef = this.ngbModal.open(this.modalTemplateRef, {centered: true });
  }

  close():void{
    this.modalRef.close();
  }

  dismiss():void{
    this.modalRef.dismiss();
  }

  onAddButtonClick():void{
    this.add.emit(this.selectedCity);
    this.dismiss();
  }
}
