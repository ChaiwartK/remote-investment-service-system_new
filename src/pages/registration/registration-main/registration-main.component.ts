import { Component, OnInit, ViewChild } from '@angular/core';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { Router } from '@angular/router';

interface Person {
  lastupDate: Date;         
  RegisId: string;         
  clientName: string;  
  nationalID: string;     
  createDate: Date;         
  statusType: string;       
  rmName: string;           
  roleName: string;  
  approveName: string;      
}

@Component({
  selector: 'app-registration-main',
  templateUrl: './registration-main.component.html',
  styleUrl: './registration-main.component.scss'
})

export class RegistrationMainComponent implements OnInit {
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  checked = false;
  category: string = '0';
  categorySearch: string | null;
  size: NzSelectSizeType = 'large';
  selectedStatus: string = 'ALL'; 
  filteredData: Person[] = []; 
 
  startValue: Date | null = null;
  endValue: Date | null = null;
  searchValue: any;


  currentPage: Number = 1;
  perPage: Number = 10;
  totalData: Number = 100;
  

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



  listRole: Array<{ value: string; label: string }> = [
    {
      value: '0',
      label: 'RM Maker',
    }, {
      value: '1',
      label: 'RM Checker',
    }, {
      value: '2',
      label: 'WO Maker',
    }, {
      value: '3',
      label: 'WO Checker',
    }
  ];

listOfData: Person[] = [
  {
    lastupDate: new Date('2024-01-10'),
    RegisId: 'R001',
    clientName: 'John Doe',
    nationalID: '1300000746888',
    createDate: new Date('2023-11-15'),
    statusType: 'Approved',
    rmName: 'Alice Johnson',
    roleName: 'WO Maker',
    approveName: 'David Smith'
  },
  {
    lastupDate: new Date('2024-01-11'),
    RegisId: 'R002',
    clientName: 'Jane Smith',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-16'),
    statusType: 'Pending',
    rmName: 'Bob Brown',
    roleName: 'RM Checker',
    approveName: 'Michael Lee'
  },
  {
    lastupDate: new Date('2024-01-12'),
    RegisId: 'R003',
    clientName: 'Michael Green',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-17'),
    statusType: 'Approved',
    rmName: 'Eve Black',
    roleName: 'RM Checker',
    approveName: 'James White'
  },
  {
    lastupDate: new Date('2024-01-13'),
    RegisId: 'R004',
    clientName: 'Emily White',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-18'),
    statusType: 'Resubmit',
    rmName: 'Charlie Wilson',
    roleName: 'WO Checker',
    approveName: 'Anna Taylor'
  },
  {
    lastupDate: new Date('2024-01-14'),
    RegisId: 'R005',
    clientName: 'Chris Blue',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-19'),
    statusType: 'Rejected',
    rmName: 'Daniel Harris',
    roleName: 'WO Checker',
    approveName: 'Sophia Clark'
  },
  {
    lastupDate: new Date('2024-01-15'),
    RegisId: 'R006',
    clientName: 'Olivia Brown',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-20'),
    statusType: 'Pending',
    rmName: 'Henry Moore',
    roleName: 'WO Maker',
    approveName: 'Jacob Martinez'
  },
  {
    lastupDate: new Date('2024-01-16'),
    RegisId: 'R007',
    clientName: 'Liam Johnson',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-21'),
    statusType: 'Resubmit',
    rmName: 'Isabella Garcia',
    roleName: 'WO Checker',
    approveName: 'Ethan Rodriguez'
  },
  {
    lastupDate: new Date('2024-01-17'),
    RegisId: 'R008',
    clientName: 'Sophia Davis',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-22'),
    statusType: 'Draft',
    rmName: 'Lucas Walker',
    roleName: 'RM Checker',
    approveName: 'Emma Lewis'
  },
  {
    lastupDate: new Date('2024-01-18'),
    RegisId: 'R009',
    clientName: 'Ethan Thomas',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-23'),
    statusType: 'Pending',
    rmName: 'Mia Young',
    roleName: 'RM Maker',
    approveName: 'William Hall'
  },
  {
    lastupDate: new Date('2024-01-19'),
    RegisId: 'R010',
    clientName: 'Ava Lee',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-24'),
    statusType: 'Resubmit',
    rmName: 'Mason Allen',
    roleName: 'RM Maker',
    approveName: 'Olivia Perez'
  },
  {
    lastupDate: new Date('2024-01-20'),
    RegisId: 'R011',
    clientName: 'James Miller',
    nationalID: '1300000746997',
    createDate: new Date('2023-11-25'),
    statusType: 'Approved',
    rmName: 'Charlotte Gonzalez',
    roleName: 'RM Maker',
    approveName: 'Noah Adams'
  }
];

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.filteredData = this.listOfData;
  }

  goToCreate() {
    this.router.navigate(['/riss/registration/create']);
  }


  filterData(status: string) {
    this.selectedStatus = status;
    let filtered = this.listOfData.filter(data => {
      if (status === 'ALL') {
        return true;
      } else {
        return data.statusType === status;
      }
    });
  

  this.filteredData = filtered;
  console.log('Filtered Data:', this.filteredData);
  }


  getStatusCount(status: string): number {
    return this.listOfData.filter(item => item.statusType === status).length;
  }

  submitSearch() {
    // สร้าง payload เริ่มต้น
    let payload: any = {
        currentPage: this.currentPage,
        perPage: this.perPage
    };

    // เพิ่มข้อมูลลงใน payload ตาม category ที่เลือก
    if (this.category === '0' && this.categorySearch?.trim()) {
        payload = {
            ...payload,
            category: 'clientNameOrRmName',
            clientNameOrRmName: this.categorySearch.trim()
        };
    } else if (this.category === '1' && this.categorySearch?.trim()) {
        payload = {
            ...payload,
            category: 'nationalID',
            nationalID: this.categorySearch.trim()
        };
    } else if (this.category === '2' && this.startValue && this.endValue) {
      payload = {
        ...payload,
        category: 'dateRange',
        startDate: this.formatDate(this.startValue), 
        endDate: this.formatDate(this.endValue)      
    };
    } else if (this.category === '3' && this.categorySearch) {
        payload = {
            ...payload,
            category: 'role',
            role: this.categorySearch
        };
    } else if (this.category === '4' && this.categorySearch?.trim()) {
        payload = {
            ...payload,
            category: 'regisId',
            regisId: this.categorySearch.trim()
        };
    } else {
        console.error('Invalid category or missing search criteria');
        return;
    }

    console.log('Payload to be sent:', payload);
    // เรียก API ที่นี่
}

// ฟังก์ชันสำหรับแปลงวันที่เป็นรูปแบบ dd-MM-yyyy
formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มต้นที่ 0
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
  
}
