import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses/expenses.service';
import { IncomesService } from '../incomes/incomes.service';
import { Income } from 'src/app/incomes/income.model';
import { Expense } from 'src/app/expenses/expenses.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  incomeValue!: number;
  expenseValue!: number;
  currentDate = new Date();

  constructor(
    private incomesService: IncomesService,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.incomesService.updateIncomesState().subscribe(() => {
      this.totalMoney();
    });
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
