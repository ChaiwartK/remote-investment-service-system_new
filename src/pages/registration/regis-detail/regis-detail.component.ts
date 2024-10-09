import { Component } from '@angular/core';

interface DataItem {
  clientnumber: string;
  accountno: string;
  accountname: string;
  joint:string;
  mf:string;
  omnibus : string;
  cur : string;
  availablebalance : string;
}
interface ParentItemData {
  key: number;
  updateDate: string;
  caseID: string;
  createDate: string;
  rmName:string;
  approver1: string;
  approver2: string;
  status:string;
  expand: boolean;
}

interface ChildrenItemData {
  key: number;
  updateDate : string;
 dis : string;
 dis2: string;
}


@Component({
  selector: 'app-regis-detail',
  templateUrl: './regis-detail.component.html',
  styleUrl: './regis-detail.component.scss'
})
export class RegisDetailComponent {
  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  searchValue = '';
  visible = false;
 
  listOfData: DataItem[] = [
    {
      clientnumber: '000002675462',
      accountno: '5014201753',
      accountname: 'วัลลภา ช่วยความดี',
      joint : 'N',
      mf : 'N',
      omnibus :  'N',
      cur : 'THB',
      availablebalance : '3,369,307,766.76'
    },
    {
      clientnumber: '000002675462',
      accountno: '5014201753',
      accountname: 'วัลลภา ช่วยความดี',
      joint : 'N',
      mf : 'N',
      omnibus : 'N',
      cur : 'THB',
      availablebalance : '3,369,307,766.76'
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.clientnumber.indexOf(this.searchValue) !== -1);
  }
  
  expandIconPosition: 'end' | 'start' = 'end';
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    }
  ];
   /*table last */
  //  isExpanded = false;

   listOfParentData: ParentItemData[] = [];
   listOfChildrenData: ChildrenItemData[] = [];
  // ];
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 1; ++i) {
      this.listOfParentData.push({
        key: i,
      updateDate: '30/07/67',
      caseID: 'CR-202407241',
      createDate: '30/07/67',
      rmName: 'เรวดี ศิริรัตน์',
      approver1: 'WO Maker',
      approver2: '',
      status:'padding',
      expand: false
      });
    }
    for (let i = 0; i < 2; ++i) {
      this.listOfChildrenData.push({
        key: i,
        updateDate: '30/07/67',
       dis : 'Re-submitted by approver 1',
       dis2 : 'อื่นๆ / ข้อมูลอีเมลผิด เปลี่ยนเป็น  wanlapa.chuaykwamdee@gmail.com'
      });
    }
  }
  toggleExpand(parent: ParentItemData) {
    parent.expand = !parent.expand;
  }
}
