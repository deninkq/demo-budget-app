import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from 'src/app/incomes/income.model';

@Injectable()
export class IncomesService {
  private incomeData = new BehaviorSubject<Income[]>([
    new Income('Salary', 2000),
    new Income('Sold Car', 3000),
  ]);

  getIncomes() {
    return this.incomeData.asObservable();
  }

  addIncome(income: Income) {
    const currentData = this.incomeData.value;
    const updateData = [...currentData, income];
    this.incomeData.next(updateData);
  }

  deleteIncome(index: number) {
    this.incomeData.value.splice(index, 1);
    this.incomeData.next([...this.incomeData.value]);
  }
}
