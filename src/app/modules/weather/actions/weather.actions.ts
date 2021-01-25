import { CityModel } from "../models/city.model";

export class AddCity {
    static readonly type = '[Weather] Add City';
    constructor(public city: CityModel) {}
}