import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';
import { ExpensesService } from './expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses!: Expense[];

  constructor(private expenceService: ExpensesService) {}

  ngOnInit(): void {
    this.expenceService
      .getExpenses()
      .subscribe((data: Expense[]) => (this.expenses = data));
  }
}
