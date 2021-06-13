import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseDetailsComponent } from './details/expense-details/expense-details.component';
import { IncomeDetailsComponent } from './details/income-details/income-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'details/incomes', component: IncomeDetailsComponent },
  { path: 'details/expenses', component: ExpenseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
