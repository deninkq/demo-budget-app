import { Component, Input, OnInit } from '@angular/core';
import { Income } from 'src/app/incomes/income.model';

@Component({
  selector: 'app-income-details-item',
  templateUrl: './income-details-item.component.html',
  styleUrls: ['./income-details-item.component.css'],
})
export class IncomeDetailsItemComponent implements OnInit {
  @Input() incomes!: Income;
  constructor() {}

  ngOnInit(): void {}
}
