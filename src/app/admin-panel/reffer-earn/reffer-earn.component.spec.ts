import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefferEarnComponent } from './reffer-earn.component';

describe('RefferEarnComponent', () => {
  let component: RefferEarnComponent;
  let fixture: ComponentFixture<RefferEarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefferEarnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefferEarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
