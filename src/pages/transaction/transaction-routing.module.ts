import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionMainComponent } from './transaction-main/transaction-main.component';

const routes: Routes = [
  {
    path: 'main',
    component: TransactionMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
