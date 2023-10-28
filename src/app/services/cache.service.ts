import {Injectable, Type} from '@angular/core';
import {WeatherService} from "./weather.service";
import {WeatherParams} from "../interfaces/IWeatherParams";

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private weather: WeatherService) { }

  private settingsServices = [
    {name: 'weather', service: this.weather, selector: 'weatherParams', setter: 'setParams'},
  ]
  public loadSettings() {
    this.loadSection(this.settingsServices[0])
  }

  private loadSection<T>(section: any) {
    const rawData = localStorage.getItem(section.selector);
    if (rawData) {
      const data: T  = JSON.parse(rawData);
      section.service[section.setter](data);
    }
  }
}
