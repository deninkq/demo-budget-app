import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Expense } from 'src/app/expenses/expenses.model';

@Injectable()
export class ExpensesService {
  private expenseData = new BehaviorSubject<Expense[]>([
    new Expense('Buy new Tshirt', 20),
    new Expense('New Car', 2500),
  ]);

  getExpenses() {
    return this.expenseData.asObservable();
  }
}
