import { Component, OnInit } from '@angular/core';
import { Income } from './income-item/income.model';
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
    this.incomes = this.incomeService.incomes;
  }
}
