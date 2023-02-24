import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldResultComponent } from './old-result.component';

describe('OldResultComponent', () => {
  let component: OldResultComponent;
  let fixture: ComponentFixture<OldResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
