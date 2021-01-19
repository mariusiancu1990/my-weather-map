import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetData, SetData } from 'src/app/state/app.action';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @Select(AppState.data) data$: Observable<string>;
  dataSub: Subscription;
  dataValue: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.dataSub = this.data$.subscribe(value => {
      this.dataValue = value;
    });
    setTimeout(
      () => {
        this.store.dispatch(new SetData('altceva'));
      }, 2000
    );

    this.store.dispatch(new GetData).subscribe(value => {
      console.log('getData: ', value);
    });

  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
