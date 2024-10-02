import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isCollapsed = false;
  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: 'Registration',
      icon: 'mail',
      route: '/riss/registration/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Transaction',
      icon: 'mail',
      route: '/riss/transaction/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Maintenance',
      icon: 'mail',
      route: '/riss/maintenance/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'RISS Report',
      icon: 'mail',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Buy / switch in',
          icon: 'bars',
          route: '/riss/report/buy',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Sell / switch out',
          icon: 'bars',
          route: '/riss/report/sell',
          selected: false,
          disabled: false
        },
      ]
    },
  ];

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
