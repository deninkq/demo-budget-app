import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from 'src/app/expenses/expenses.model';

@Injectable()
export class ExpensesService {
  private expenseData: BehaviorSubject<Expense[]> = new BehaviorSubject<
    Expense[]
  >([]);

  constructor(private http: HttpClient) {}

  getExpenses() {
    return this.expenseData.asObservable();
  }

  updateExpensesState() {
    return this.http
      .get<{ [key: string]: Expense }>(
        'https://budget-application-587ed-default-rtdb.firebaseio.com/expenses.json'
      )
      .pipe(
        map((responseData) => {
          const expenseArray: Expense[] = [];
          for (const key in responseData) {
            expenseArray.push({ ...responseData[key], id: key });
          }
          this.expenseData.next(expenseArray);
        })
      );
  }

  addExpense(expenseData: Expense) {
    return this.http.post(
      'https://budget-application-587ed-default-rtdb.firebaseio.com/expenses.json',
      expenseData
    );
  }

  deleteExepense(id: string) {
    return this.http.delete<Expense>(
      `https://budget-application-587ed-default-rtdb.firebaseio.com/expenses/${id}.json`
    );
  }
}
