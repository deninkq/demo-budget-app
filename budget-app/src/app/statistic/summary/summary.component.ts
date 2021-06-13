import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  description!: string;
  value!: number;

  addForm!: FormGroup;

  showIncomeForm = false;
  showExpenseForm = false;

  currentDate = new Date();

  constructor(
    private incomesService: IncomesService,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.totalMoney();
    this.addInputForm();
  }

  totalMoney() {
    this.incomesService.getIncomes().subscribe((data: Income[]) => {
      this.incomeValue = data.map((x) => x.value).reduce((a, b) => a + b, 0);
    });

    this.expensesService.getExpenses().subscribe((data: Expense[]) => {
      this.expenseValue = data.map((x) => x.value).reduce((a, b) => a + b, 0);
    });
  }

  addInputForm() {
    this.addForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      value: new FormControl(null, Validators.required),
    });
  }

  onIncomeClicked() {
    this.showExpenseForm = false;
    this.showIncomeForm = !this.showIncomeForm;
  }

  onExpenseClicked() {
    this.showIncomeForm = false;
    this.showExpenseForm = !this.showExpenseForm;
  }

  onAddClicked() {
    if (this.description !== '' && this.value > 0 && this.showIncomeForm) {
      const income = new Income(this.description, this.value);
      this.incomesService.addIncome(income);
    }

    if (this.description !== '' && this.value > 0 && this.showExpenseForm) {
      const expense = new Expense(this.description, this.value);
      this.expensesService.addExpense(expense);
    }

    this.addForm.reset();
  }
}
