import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationMainComponent } from './registration-main/registration-main.component';
import { NgZorroAntdModule } from '../../plugins/ng-zorro-antd-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';


@NgModule({
  declarations: [
    RegistrationMainComponent,
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
