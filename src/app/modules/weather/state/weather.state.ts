import { UpdateWeatherInfo } from './../actions/weather.actions';
import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import produce from 'immer';
import { WeatherInfoModel } from 'src/app/modules/weather/models/weather-info.model';
import { AddCity } from '../actions/weather.actions';
import { WeatherModel } from "../models/weather.model";
import { WeatherService } from '../services/weather/weather.service';

@State<WeatherModel>({
    name:'weather',
    defaults:{
        allCities:[
            {
                id:"Bucharest",
                name: "Bucharest"
            },
            {
                id:"London",
                name: "London"
            },
            {
                id:"Câmpia Turzii",
                name: "Câmpia Turzii"
            }
        ],
        myCities:[]    
    }
})
@Injectable()
export class WeatherState{

    constructor(private weatherAPI:WeatherService){}

    @Action(UpdateWeatherInfo)
    public updateWeatherInfo(ctx:StateContext<WeatherModel>, action:UpdateWeatherInfo){
        const state = ctx.getState();

        //get weather info data from api
        this.weatherAPI.getWeatherInfo(action.city).subscribe((value:WeatherInfoModel) => {            
            //set weather info state
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
    public addCity(ctx:StateContext<WeatherModel>, action:AddCity){
        ctx.setState(produce((draft:WeatherModel)=>{
            draft.myCities.push(action.city);
        }))
    }
}