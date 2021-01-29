import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, Store } from "@ngxs/store";
import { AddCity } from "../actions/weather.actions";
import { CityModel } from "../models/city.model";


export class CityStateModel {
    weather: CityModel[]
}
@State<CityStateModel>({
    name: 'weather',
    defaults: {
        weather: []
    },

})

@Injectable()
export class WeatherState{
    @Selector()
    static getWeather(state: CityStateModel) {
        return state.weather
    }

    @Action(AddCity)
    add({ getState, patchState }: StateContext<CityStateModel>, { city }: AddCity) {
        const state = getState();
        patchState({
            weather: [...state.weather, city]
        })
    }
}