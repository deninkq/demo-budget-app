import { Component, Input, OnInit } from '@angular/core';
import { Income } from 'src/app/incomes/income.model';
import { IncomesService } from '../incomes.service';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.css'],
})
export class IncomeItemComponent implements OnInit {
  @Input() income!: Income;
  @Input() id!: string;

  constructor(private incomesService: IncomesService) {}

  ngOnInit(): void {}

  onDeleteClicked() {
    this.incomesService.deleteIncome(this.id);
  }
}
