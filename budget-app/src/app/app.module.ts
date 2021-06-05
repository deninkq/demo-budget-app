import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { IncomesService } from './incomes/income-item/incomes.service';
import { ExpensesService } from './expenses/expenses.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
  ],
  providers: [IncomesService, ExpensesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
