import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermCondiComponent } from './term-condi.component';

describe('TermCondiComponent', () => {
  let component: TermCondiComponent;
  let fixture: ComponentFixture<TermCondiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermCondiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermCondiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
