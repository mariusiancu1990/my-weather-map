import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {

  @Input() label:string;

  constructor() { }

  ngOnInit(): void {
  }

}
