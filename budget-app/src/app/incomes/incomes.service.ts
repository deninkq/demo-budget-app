import { Income } from './income-item/income.model';

export class IncomesService {
  incomes: Income[] = [
    {
      description: 'Sell Car',
      value: 2500,
    },
    {
      description: 'Salary',
      value: 1500,
    },
  ];
}
