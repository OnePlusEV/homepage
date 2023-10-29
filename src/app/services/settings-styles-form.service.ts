import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SettingsStylesFormService {

  constructor() { }

  public createStylesForm(): FormGroup {
    return new FormGroup<any>({
      enable: new FormControl(true),
      background: new FormControl(''),
      color: new FormControl(''),
      width: new FormControl(0),
    })
  }
}
