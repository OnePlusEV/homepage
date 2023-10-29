import {Injectable, Type} from '@angular/core';
import {WeatherService} from "./weather.service";
import {WeatherParams} from "../interfaces/Wetaher/IWeatherParams";
import {BehaviorSubject, Observable} from "rxjs";

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

  public settingsChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public settingsChanged$: Observable<boolean> = this.settingsChanged.asObservable();

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
    this.settingsChanged.next(true);
  }

  public getStylesFromCache(selector: string, isForm: boolean = false) {
    let cachedStyles = localStorage.getItem('styles');
    const styles = cachedStyles ? JSON.parse(cachedStyles) : {};
    if (isForm) {
      return styles[selector];
    }
    return {
      ...styles[selector],
      width: `${styles[selector].width}px`
    };
  }
}
