import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevMobileComponent } from './dev-mobile.component';

describe('DevMobileComponent', () => {
  let component: DevMobileComponent;
  let fixture: ComponentFixture<DevMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
