import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDetailsItemComponent } from './expense-details-item.component';

describe('ExpenseDetailsItemComponent', () => {
  let component: ExpenseDetailsItemComponent;
  let fixture: ComponentFixture<ExpenseDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseDetailsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
