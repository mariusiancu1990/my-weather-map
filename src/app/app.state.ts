import { WeatherService } from 'src/app/services/weather.service';
import { WeatherModel } from 'src/app/models/weather.model';
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddCity, GetWeatherInfo } from './app.actions';
import { AppModel } from "./models/app.model";
import produce from 'immer';

@State<AppModel>({
    name:'app',
    defaults:{
        allCities:[
            {
                id:0,
                name: "Bucharest"
            },
            {
                id:1,
                name: "London"
            }
        ],
        myCities:[],
        weatherInfo: {
            temperature:{
                value:0,
                minValue:0,
                maxValue:0,
                feelsLike:0
            },
            pressure: 0,
            humidity:0,
            visibility:0,
            windSpeed:0
        }
    }
})
@Injectable()
export class AppState{

    constructor(private weatherService:WeatherService){}

    @Selector()
    static allCities(state:AppModel){
        return state.allCities;
    }

    @Selector()
    static myCities(state:AppModel){
        return state.myCities;
    }

    @Selector()
    static weatherInfo(state:AppModel){
        return state.weatherInfo;
    }

    @Action(GetWeatherInfo)
    getWeatherInfo(ctx:StateContext<AppModel>, action:GetWeatherInfo){
        const state = ctx.getState();
        this.weatherService.fetchWheatherInfo(action.city).subscribe((value:WeatherModel) => {            
            ctx.setState({
                ...state,
                weatherInfo: {
                    ...state,
                    ...value                
                }
            })          
        });          
    }

    @Action(AddCity)
    addCity(ctx:StateContext<AppModel>, action:AddCity){
        ctx.setState(produce((draft:AppModel)=>{
            draft.myCities.push(action.city);
        }))
    }
}