import { TestBed } from '@angular/core/testing';

import { SettingsStylesFormService } from './settings-styles-form.service';

describe('SettingsStylesFormService', () => {
  let service: SettingsStylesFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsStylesFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
