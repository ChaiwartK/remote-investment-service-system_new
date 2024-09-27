import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from './plugins/ng-zorro-antd-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { HTTP_INTERCEPTORS, provideHttpClient, withJsonpSupport } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { LayoutComponent } from './layouts/layout.component';
import { LayoutModule } from './layouts/layout.module';
import { AppRoutingModule } from './router/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error/error404/error404.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HttpHeaderInterceptor } from './services/Interceptor/http-header.interceptor';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Error404Component,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  bootstrap: [AppComponent, LayoutModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeaderInterceptor,
      multi: true
    },
    provideHttpClient(withJsonpSupport()),
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class AppModule { }
