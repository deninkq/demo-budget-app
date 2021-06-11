import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';
import { ExpensesService } from 'src/app/expenses/expenses.service';
import { Income } from 'src/app/incomes/income.model';
import { IncomesService } from 'src/app/incomes/incomes.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  incomeValue!: number;
  expenseValue!: number;

  currentDate = new Date();
  constructor(
    private incomesService: IncomesService,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.totalMoney();
  }

  totalMoney() {
    this.incomesService.getIncomes().subscribe((data: Income[]) => {
      this.incomeValue = data.map((x) => x.value).reduce((a, b) => a + b, 0);
    });

    this.expensesService.getExpenses().subscribe((data: Expense[]) => {
      this.expenseValue = data.map((x) => x.value).reduce((a, b) => a + b, 0);
    });
  }
}
