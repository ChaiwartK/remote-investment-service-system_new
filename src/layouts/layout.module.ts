import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [ContentComponent, AppFooterComponent],
  imports: [
    RouterModule,
    CommonModule,
    NzLayoutModule
  ],
  exports: [ContentComponent, AppFooterComponent],
})
export class LayoutModule { }
