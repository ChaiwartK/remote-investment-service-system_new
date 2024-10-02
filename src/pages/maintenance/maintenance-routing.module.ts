import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceMainComponent } from './maintenance-main/maintenance-main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MaintenanceMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
