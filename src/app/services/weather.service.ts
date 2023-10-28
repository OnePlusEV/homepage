import { Injectable } from '@angular/core';
import { WeatherParams} from "../interfaces/IWeatherParams";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  public nullParams: WeatherParams = {
    apiVer: 0,
    unit: '',
    cityId: 0,
    appId: ''
  };

  private weatherParams: BehaviorSubject<WeatherParams> = new BehaviorSubject<WeatherParams>(this.nullParams);
  private readonly weatherParams$: Observable<WeatherParams> = this.weatherParams.asObservable();

  getParams(): WeatherParams {
    return this.weatherParams.value;
  }

  setParams(value: WeatherParams) {
    debugger
    this.weatherParams.next(value);
  }

  public setParamsToCache(value: WeatherParams) {
    const params = JSON.stringify(value);
    localStorage.setItem('weatherParams', params);
  }
}
