import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public timeSeparator: string = ':'
  ngOnInit() {
    setInterval(() => {
      this.getTime();
    }, 1000)
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
