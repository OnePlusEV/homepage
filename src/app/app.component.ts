import {Component, OnInit} from '@angular/core';
import {CacheService} from "./services/cache.service";
import { routes } from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cache: CacheService) {
  }

  public links = routes;

  ngOnInit() {
    this.cache.loadSettings();

  }
}
