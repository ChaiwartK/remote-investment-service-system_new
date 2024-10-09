import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationMainComponent } from './registration-main/registration-main.component';
import { NgZorroAntdModule } from '../../plugins/ng-zorro-antd-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RegisDetailComponent } from './regis-detail/regis-detail.component';
import { RegisCreateComponent } from './regis-create/regis-create.component';


@NgModule({
  declarations: [
    RegistrationMainComponent,
    RegisDetailComponent,
    RegisCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzFormModule,
    RegistrationRoutingModule,
  ]
})
export class RegistrationModule { }
