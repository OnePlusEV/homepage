import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WeatherParams } from "../../../interfaces/Wetaher/IWeatherParams";
import { WeatherResponse } from "../../../interfaces/Wetaher/IWeatherResponse";
import {WeatherService} from "../../../services/weather.service";
import {CacheService} from "../../../services/cache.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private http: HttpClient,
              private weatherService: WeatherService,
              private cache: CacheService) {}
  public weather = '';
  public stylesFromCache = {};

//   public params: WeatherParams = {
//     apiVer: 2.5,
//     cityId: 500004,
//     appId: 'e5b292ae2f9dae5f29e11499c2d82ece',
//     unit: 'metric'
// }

  ngOnInit() {
    this.stylesFromCache = this.cache.getStylesFromCache('weather');
    this.getAsyncWeather(this.weatherService.getParams())

    this.cache.settingsChanged$.subscribe(res => {
      this.stylesFromCache = this.cache.getStylesFromCache('weather');
    })
  }

  public getAsyncWeather(params: WeatherParams) {
    const url = `http://api.openweathermap.org/data/${params.apiVer}/weather?id=${params.cityId}&units=${params.unit}&appid=${params.appId}`;
    this.http.get(url).subscribe({
      next: (res:any) => {
        const weather: WeatherResponse = res;
        const t = weather.main.temp.toFixed(0) + " C";
        const desc = weather.weather[0].description;
        this.weather =  `${t} ${desc}`
      },
      error: (err: any) => {
        this.weather = 'Something went wrong'
      }
    })
  }
}
