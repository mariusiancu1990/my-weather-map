import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { AddCity } from "../actions/weather.actions";
import { WeatherModel } from "../models/weather.model";



@State<WeatherModel>({
    name: 'weather',
    defaults: {
        allCities: [
            {
                id:1, name: "Bucharest"
            },
            {
                id:2, name: "London"
            },
            {
                id:3, name: "Budapest"
            }
        ],
        myCities:[]
    },

})

@Injectable()
export class WeatherState{
    @Action(AddCity)
    addCity(ctx: StateContext<WeatherModel>, action: AddCity){
        const state =  ctx.getState();
        ctx.setState({
            ...state,
            myCities: [action.city]
        })
    }
}