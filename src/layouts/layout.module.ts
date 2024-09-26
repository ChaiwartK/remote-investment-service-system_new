import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';

@NgModule({
  declarations: [SidenavComponent, SublevelMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [SidenavComponent, SublevelMenuComponent],
})
export class LayoutModule { }
