import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  @Input() cities:Array<string>=[];

  constructor() { }

  ngOnInit(): void {
  }

}
