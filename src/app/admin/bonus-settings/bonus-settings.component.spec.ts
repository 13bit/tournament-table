import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusSettingsComponent } from './bonus-settings.component';

describe('BonusSettingsComponent', () => {
  let component: BonusSettingsComponent;
  let fixture: ComponentFixture<BonusSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
