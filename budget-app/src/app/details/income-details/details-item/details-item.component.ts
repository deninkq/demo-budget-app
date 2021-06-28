import { Component, Input, OnInit } from '@angular/core';
import { Income } from 'src/app/incomes/income.model';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.css'],
})
export class DetailsItemComponent implements OnInit {
  @Input() incomes!: Income;
  constructor() {}

  ngOnInit(): void {}
}
