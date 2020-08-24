import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWebComponent } from './dev-web.component';

describe('DevWebComponent', () => {
  let component: DevWebComponent;
  let fixture: ComponentFixture<DevWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
