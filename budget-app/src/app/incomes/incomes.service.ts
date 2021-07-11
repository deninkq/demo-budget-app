import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Income } from 'src/app/incomes/income.model';

@Injectable()
export class IncomesService implements OnInit {
  private incomeData = new BehaviorSubject<Income[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  updateIncomesState() {
    return this.http
      .get<{ [key: string]: Income }>(
        'https://budget-application-587ed-default-rtdb.firebaseio.com/incomes.json'
      )
      .pipe(
        map((responseData) => {
          const incomesArray: Income[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              incomesArray.push({ ...responseData[key], id: key });
            }
          }
          this.incomeData.next(incomesArray);
        })
      );
  }

  getIncomes() {
    return this.incomeData.asObservable();
  }

  addIncome(incomeData: Income) {
    return this.http.post<{ name: string }>(
      'https://budget-application-587ed-default-rtdb.firebaseio.com/incomes.json',
      incomeData
    );
  }

  deleteIncome(id: string) {
    console.log(id);
  }
}
