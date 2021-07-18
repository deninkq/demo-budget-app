import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';
import { ExpensesService } from 'src/app/expenses/expenses.service';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expenses!: Expense[];
  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.updateExpensesState().subscribe(() => {
      this.expensesService.getExpenses().subscribe((expenseData: Expense[]) => {
        this.expenses = expenseData;
      });
    });
  }
}
