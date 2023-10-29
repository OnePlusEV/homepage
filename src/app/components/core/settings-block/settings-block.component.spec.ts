import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBlockComponent } from './settings-block.component';

describe('SettingsBlockComponent', () => {
  let component: SettingsBlockComponent;
  let fixture: ComponentFixture<SettingsBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsBlockComponent]
    });
    fixture = TestBed.createComponent(SettingsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
