import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';

@Component({
  selector: 'app-expense-details-item',
  templateUrl: './expense-details-item.component.html',
  styleUrls: ['./expense-details-item.component.css'],
})
export class ExpenseDetailsItemComponent implements OnInit {
  @Input() expense!: Expense;
  constructor() {}

  ngOnInit(): void {}
}
