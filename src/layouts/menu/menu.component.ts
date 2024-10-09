import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {
  menuType = 'WO';
  isCollapsed = false;
  mode = true;
  theme = false;
  munuRmType = [
    {
      level: 1,
      title: 'Registration',
      icon: 'user-add',
      route: '/riss/registration/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Transaction',
      icon: 'file-add',
      route: '/riss/transaction/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Maintenance',
      icon: 'setting',
      route: '/riss/maintenance/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'RISS Report',
      icon: 'book',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Buy / switch in',
          route: '/riss/report/buy',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Sell / switch out',
          route: '/riss/report/sell',
          selected: false,
          disabled: false
        },
      ]
    },
  ];
  munuWoType = [
    {
      level: 1,
      title: 'Work basket',
      icon: 'inbox',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Transaction basket',
          route: '/riss/report/buy',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Maintenance basket',
          route: '/riss/report/sell',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Registration basket',
          route: '/riss/report/sell',
          selected: false,
          disabled: false
        },
      ]
    },
    {
      level: 1,
      title: 'Transaction',
      icon: 'file-add',
      route: '/riss/transaction/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Maintenance',
      icon: 'setting',
      route: '/riss/maintenance/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'Registration',
      icon: 'user-add',
      route: '/riss/registration/main',
      open: true,
      selected: false,
      disabled: false,
    },
    {
      level: 1,
      title: 'RISS Report',
      icon: 'book',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Buy / switch in',
          route: '/riss/report/buy',
          selected: false,
          disabled: false,
        },
        {
          level: 2,
          title: 'Sell / switch out',
          route: '/riss/report/sell',
          selected: false,
          disabled: false
        },
      ]
    },
  ];

  menus = this.menuType == 'RM' ? this.munuRmType : this.munuWoType;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
