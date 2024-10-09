import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationMainComponent } from './registration-main/registration-main.component';
import { RegisDetailComponent } from './regis-detail/regis-detail.component';
import { RegisCreateComponent } from './regis-create/regis-create.component';

const routes: Routes = [
  {
    path: 'main',
    component: RegistrationMainComponent,
  },
  {
    path: 'detail',
    component: RegisDetailComponent,
  },
  {
    path: 'create',
    component: RegisCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
