import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Income } from 'src/app/incomes/income.model';

@Injectable({ providedIn: 'root' })
export class IncomesService implements OnInit {
  private incomeData: BehaviorSubject<Income[]> = new BehaviorSubject<Income[]>(
    []
  );

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updateIncomesState().subscribe(() => {});
  }

  getIncomes(): Observable<Income[]> {
    return this.incomeData.asObservable();
  }

  updateIncomesState() {
    return this.http
      .get<{ [key: string]: Income }>(
        'https://budget-application-587ed-default-rtdb.firebaseio.com/incomes.json'
      )
      .pipe(
        map((responseData) => {
          const incomesArray: Income[] = [];

          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              incomesArray.push({ ...responseData[key], id: key });
            }
          }
          this.incomeData.next(incomesArray);
        })
      );
  }

  addIncome(incomeData: Income) {
    return this.http.post<{ name: string }>(
      'https://budget-application-587ed-default-rtdb.firebaseio.com/incomes.json',
      incomeData
    );
  }

  deleteIncome(id: string) {
    return this.http.delete<Income>(
      `https://budget-application-587ed-default-rtdb.firebaseio.com/incomes/${id}.json`
    );
  }
}
