import {Component, OnInit} from '@angular/core';
import {SettingsStylesFormService} from "../../services/settings-styles-form.service";
import {CacheService} from "../../services/cache.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public styleForm: SettingsStylesFormService,
              public cache: CacheService) {
  }


  ngOnInit() {
  }


}
