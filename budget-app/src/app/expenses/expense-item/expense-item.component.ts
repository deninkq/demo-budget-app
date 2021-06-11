import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense!: Expense;

  constructor() {}

  ngOnInit(): void {}
}
