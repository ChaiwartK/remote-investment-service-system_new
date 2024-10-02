import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationMainComponent } from './registration-main/registration-main.component';

const routes: Routes = [
  {
    path: 'main',
    component: RegistrationMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
