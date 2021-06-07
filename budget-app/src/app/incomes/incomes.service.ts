import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Income } from './income-item/income.model';

@Injectable()
export class IncomesService {
  private incomeData = new BehaviorSubject<Income[]>([
    new Income('Salary', 2000),
    new Income('Sold Car', 3000),
  ]);

  getIncomes() {
    return this.incomeData.asObservable();
  }
}
