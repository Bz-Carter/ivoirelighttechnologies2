import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialManagementComponent } from './social-management.component';

describe('SocialManagementComponent', () => {
  let component: SocialManagementComponent;
  let fixture: ComponentFixture<SocialManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
