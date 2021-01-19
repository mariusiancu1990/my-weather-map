import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetData, SetData } from './app.action';
import {Weather} from '../models/weather';

export interface AppStateModel {
  data: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    data: 'initial',
  },
})
@Injectable()
export class AppState {
  constructor() {}

  @Selector()
  static data(state: AppStateModel) {
    return state.data;
  }

  @Action(SetData)
  setData({patchState}: StateContext<AppStateModel>, {data}: SetData) {
    patchState({ data });
  }
  @Action(GetData)
  getData({getState}: StateContext<AppStateModel>) {
    const state = getState();
    return state.data;
  }
}