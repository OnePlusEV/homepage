import {Component, OnInit} from '@angular/core';
import {SettingsStylesFormService} from "../../services/settings-styles-form.service";
import {FormGroup} from "@angular/forms";
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

  public weatherForm: FormGroup = new FormGroup<any>({});

  ngOnInit() {
    this.weatherForm = this.styleForm.createStylesForm();

    this.weatherForm.valueChanges.subscribe(() => {
      const form: Object = this.weatherForm.getRawValue();
      this.cache.saveStylesToCache('weather', form);
    })
  }


}
