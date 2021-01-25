import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modal: NgbModal) {}

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
}
