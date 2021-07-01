import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDetailsItemComponent } from './income-details-item.component';

describe('IncomeDetailsItemComponent', () => {
  let component: IncomeDetailsItemComponent;
  let fixture: ComponentFixture<IncomeDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeDetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
