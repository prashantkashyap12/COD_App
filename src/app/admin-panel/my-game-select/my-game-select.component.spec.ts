import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGameSelectComponent } from './my-game-select.component';

describe('MyGameSelectComponent', () => {
  let component: MyGameSelectComponent;
  let fixture: ComponentFixture<MyGameSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGameSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGameSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
