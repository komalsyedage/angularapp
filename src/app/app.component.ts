import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'angularapp';
  Bank:any=[{
    bankName:"SBI",
    bankId:'105',
    bankLocation:'XYZ'
  },
  {
    bankName:"Bank Of India",
    bankId:'103',
    bankLocation:'ABC'
  },
  {
    bankName:"STATE BANK",
    bankId:'102',
    bankLocation:'NG'
  },
  {
    bankName:"Bank OF Maharashtra",
    bankId:'100',
    bankLocation:'BKY'
  }];
  
 EmployeeRecords: any = [
  {
    ename:'Rakesh',ecity:'pune',esalary:'200000'
  },
  {
    ename:'Mahesh',ecity:'Mumbai',esalary:'50000'
  },
  {
    ename:'Divya',ecity:'Banglor',esalary:'60000'
  }
 ]
 item:any=[];
 addItem(newItem:string){
  this.item.push(newItem);
 }
 uid:any;// numer sir take
 
 }

