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

  addForm!: FormGroup;

  showIncomeForm = false;
  showExpenseForm = false;

  currentDate = new Date();

  constructor(
    private incomesService: IncomesService,
    private expensesService: ExpensesService
  ) {}

  ngOnInit(): void {
    this.addInputForm();
    this.totalMoney();
    this.onIncomeClicked();
  }

  totalMoney() {
    this.incomesService.updateIncomesState().subscribe(() => {
      this.incomesService.getIncomes().subscribe((data: Income[]) => {
        this.incomeValue = data.map((x) => x.value).reduce((a, b) => a + b, 0);
      });
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
    this.addForm.reset();
    this.showExpenseForm = false;
    this.showIncomeForm = true;
  }

  onExpenseClicked() {
    this.addForm.reset();
    this.showIncomeForm = false;
    this.showExpenseForm = true;
  }

  onAddClicked() {
    const formValue: { description: string; value: number } =
      this.addForm.getRawValue();

    if (
      this.showIncomeForm &&
      formValue.description !== '' &&
      formValue.value > 0
    ) {
      const newIncome: Income = {
        description: formValue.description,
        value: formValue.value,
        date: new Date(),
      };
      this.incomesService.addIncome(newIncome).subscribe(() => {});

      this.addForm.reset();
    }

    // if (
    //   this.inputDescription !== '' &&
    //   this.inputValue > 0 &&
    //   this.showExpenseForm
    // ) {
    //   const expense = new Expense(this.inputDescription, this.inputValue);
    //   this.expensesService.addExpense(expense);

    //   this.addForm.reset();
    // }
  }
}
