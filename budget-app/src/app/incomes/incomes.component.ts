import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/incomes/income.model';
import { IncomesService } from './incomes.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css'],
})
export class IncomesComponent implements OnInit {
  incomes: Income[] = [];

  constructor(private incomeService: IncomesService) {}

  ngOnInit(): void {
    this.incomeService.updateIncomesState().subscribe(() => {
      this.incomeService.getIncomes().subscribe((incomes) => {
        this.incomes = incomes;
      });
    });
  }
}
