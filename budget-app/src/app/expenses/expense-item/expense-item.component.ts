import { Component, Input, OnInit } from '@angular/core';
import { Expense } from 'src/app/expenses/expenses.model';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.css'],
})
export class ExpenseItemComponent implements OnInit {
  @Input() expense!: Expense;
  @Input() id!: string;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {}

  onDeleteClicked() {
    this.expensesService.deleteExepense(this.id).subscribe(() => {
      this.expensesService.updateExpensesState().subscribe();
    });
  }
}
