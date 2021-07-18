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

  constructor(private incomesService: IncomesService) {}

  ngOnInit() {
    this.incomesService.updateIncomesState().subscribe(() => {
      this.incomesService.getIncomes().subscribe((incomes) => {
        this.incomes = incomes;
      });
    });
  }
}
