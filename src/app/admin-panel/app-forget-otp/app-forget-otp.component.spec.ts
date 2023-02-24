import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForgetOtpComponent } from './app-forget-otp.component';

describe('AppForgetOtpComponent', () => {
  let component: AppForgetOtpComponent;
  let fixture: ComponentFixture<AppForgetOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppForgetOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppForgetOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
