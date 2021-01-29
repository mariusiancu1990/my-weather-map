import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faAngleRight, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CityModel } from '../../models/city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @Input()
  city$: Observable<CityModel>
  
  faAngleRight = faAngleRight;
  faUserSecret = faUserSecret;
  public edited: boolean;

  constructor(private store: Store) { 
    this.city$ = this.store.select(state => state.weather.weather)
  }
  // addCity(){
  //   this.edited = true;
  //  //wait 3 Seconds and show
  //  setTimeout(function() {
  //      this.edited = false;
  //      console.log(this.edited);
  //  }.bind(this), 10);

  //   console.log('false')
  // }
  ngOnInit(): void {
  }
  sayCountry(name){
    console.log(name)
  }
}
