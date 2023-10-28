import {Component, OnInit} from '@angular/core';
import {CacheService} from "./services/cache.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cache: CacheService) {
  }

  ngOnInit() {
    this.cache.loadSettings();

  }
}
