import {Component, OnInit} from '@angular/core';
import {CacheService} from "../../../services/cache.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(private cache: CacheService) {
  }
  public timeSeparator: string = ':'
  public stylesFromCache: any;
  ngOnInit() {
    setInterval(() => {
      this.getTime();
    }, 1000)

    this.stylesFromCache = this.cache.getStylesFromCache('clock');

    this.cache.settingsChanged$.subscribe(res => {
      this.stylesFromCache = this.cache.getStylesFromCache('clock');
    })
  }

  getTime(): string {
    const date = new Date()
    const hours = this.addSymbol(date.getHours());
    const minutes = this.addSymbol(date.getMinutes());
    const seconds = this.addSymbol(date.getSeconds());
    return [hours, minutes, seconds].join(this.timeSeparator);
  }

  addSymbol(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }
}
