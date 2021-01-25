import { Component, OnInit } from '@angular/core';
import { faAngleRight, faUserSecret } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  faAngleRight = faAngleRight;
  faUserSecret = faUserSecret;
  public edited: boolean;
  constructor() { }
  addCity(){
    this.edited = true;
   //wait 3 Seconds and show
   setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 10);

    console.log('false')
  }
  ngOnInit(): void {
  }

}
