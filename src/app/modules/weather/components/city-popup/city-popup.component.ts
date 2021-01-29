import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { AddCity } from '../../actions/weather.actions';

@Component({
  selector: 'app-city-popup',
  templateUrl: './city-popup.component.html',
  styleUrls: ['./city-popup.component.scss'],
  providers: [NgbModal],
})

export class CityPopupComponent implements OnInit {
  
  @ViewChild('popup')
  templateRef: TemplateRef<CityPopupComponent>;
  popupRef: NgbModalRef;

  constructor(private modal: NgbModal, private store: Store) {}

  ngOnInit(): void {}

  open() {
    this.popupRef = this.modal.open(this.templateRef, { centered: true });
  }
  
  close() {
    this.popupRef.close();
  }

  dismiss() {
    this.popupRef.dismiss();
  }
 
  addCity(name){
    this.store.dispatch(new AddCity({name:name}));
    console.log(name)
  }
}
