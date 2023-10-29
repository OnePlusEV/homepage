import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {SettingsStylesFormService} from "../../../services/settings-styles-form.service";
import {CacheService} from "../../../services/cache.service";

@Component({
  selector: 'app-settings-block',
  templateUrl: './settings-block.component.html',
  styleUrls: ['./settings-block.component.scss']
})
export class SettingsBlockComponent implements OnInit {

  constructor(public styleForm: SettingsStylesFormService,
              public cache: CacheService) {
  }

  @Input() header = 'Title';
  @Input() section = 'section'
  public form: FormGroup = this.styleForm.createStylesForm();

  ngOnInit() {
    const stylesFromCache = this.cache.getStylesFromCache(this.section, true);
    this.form.setValue(stylesFromCache);

    this.form.valueChanges.subscribe(() => {
      const form: Object = this.form.getRawValue();
      this.cache.saveStylesToCache(this.section, form);
    })
  }

  changeColor(value: any) {
    this.form.get('color')?.setValue(value);
  }

  changeBackground(value: any) {
    this.form.get('background')?.setValue(value);
  }

  changeWidth(value: any) {
    this.form.get('width')?.setValue(value);
  }


}
