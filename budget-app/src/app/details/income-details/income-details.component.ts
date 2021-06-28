import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/incomes/income.model';
import { IncomesService } from 'src/app/incomes/incomes.service';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css'],
})
export class IncomeDetailsComponent implements OnInit {
  incomes!: Income[];
  constructor(private incomesServices: IncomesService) {}

  ngOnInit(): void {
    this.incomesServices.getIncomes().subscribe((data: Income[]) => {
      this.incomes = data;
    });
  }
}
