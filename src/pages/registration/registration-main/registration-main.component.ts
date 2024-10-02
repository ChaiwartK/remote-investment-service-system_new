import { Component, OnInit } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-registration-main',
  templateUrl: './registration-main.component.html',
  styleUrl: './registration-main.component.scss'
})
export class RegistrationMainComponent implements OnInit {

  category: string | null;
  categorySearch: string | null;
  size: NzSelectSizeType = 'large';
  listCategory: Array<{ value: string; label: string }> = [
    {
      value: '0',
      label: 'Client name / RM name',
    }, {
      value: '1',
      label: 'National ID / Passport',
    }, {
      value: '2',
      label: 'Date',
    }, {
      value: '3',
      label: 'Role',
    }, {
      value: '4',
      label: 'Registration ID',
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
