import { Expense } from './expense-item/expenses.midel';

export class ExpensesService {
  expenses: Expense[] = [
    {
      description: 'Buy New Shoes',
      value: 100,
    },
    {
      description: 'Rent',
      value: 520,
    },
    {
      description: 'Supermarket',
      value: 100,
    },
  ];
}
