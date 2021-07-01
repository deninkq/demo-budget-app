import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { IncomesComponent } from './incomes/incomes.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SummaryComponent } from './statistic/summary/summary.component';
import { IncomeItemComponent } from './incomes/income-item/income-item.component';
import { ExpenseItemComponent } from './expenses/expense-item/expense-item.component';
import { IncomesService } from './incomes/incomes.service';
import { ExpensesService } from './expenses/expenses.service';
import { IncomeDetailsComponent } from './details/income-details/income-details.component';
import { ExpenseDetailsComponent } from './details/expense-details/expense-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeDetailsItemComponent } from './details/income-details/income-details-item/income-details-item.component';
import { ExpenseDetailsItemComponent } from './details/expense-details/expense-details-item/expense-details-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StatisticComponent,
    IncomesComponent,
    ExpensesComponent,
    SummaryComponent,
    IncomeItemComponent,
    ExpenseItemComponent,
    IncomeDetailsComponent,
    ExpenseDetailsComponent,
    IncomeDetailsItemComponent,
    ExpenseDetailsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [IncomesService, ExpensesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
