import {Component, Input, OnInit} from '@angular/core';
import {CacheService} from "../../../services/cache.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private cache: CacheService) {
  }

  @Input() card: any;
  public stylesFromCache: any;

  ngOnInit() {
    this.stylesFromCache = this.cache.getStylesFromCache('card');

    this.cache.settingsChanged$.subscribe(res => {
      this.stylesFromCache = this.cache.getStylesFromCache('card');
    })
  }

}
