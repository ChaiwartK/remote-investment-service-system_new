import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { Error404Component } from '../pages/error/error404/error404.component';

const appRoutes: Routes = [
  {
    path: 'riss',
    children: [
      {
        path: 'registration',
        loadChildren: () => import('../pages/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('../pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('../pages/transaction/transaction.module').then(m => m.TransactionModule)
      },
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
