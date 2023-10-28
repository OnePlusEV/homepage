import {Injectable, Type} from '@angular/core';
import {WeatherService} from "./weather.service";
import {WeatherParams} from "../interfaces/Wetaher/IWeatherParams";

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private weather: WeatherService) {
  }

  private settingsServices = {
    weather: {
      name: 'weather',
      service: this.weather,
      selector: 'weatherParams',
      setter: 'setParams'
    }
  }

  public loadSettings() {
    this.loadSection(this.settingsServices.weather)
  }

  private loadSection<T>(section: any) {
    const rawData = localStorage.getItem(section.selector);
    if (rawData) {
      const data: T = JSON.parse(rawData);
      section.service[section.setter](data);
    }
  }

  public saveStylesToCache(selector: string, value: Object) {
    let cachedStyles = localStorage.getItem('styles');
    const styles = cachedStyles ? JSON.parse(cachedStyles) : {};
    styles[selector] = value;
    localStorage.setItem('styles', JSON.stringify(styles));
  }
}
