import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
 namesearch:string='';
// productArr:any[]=[
//   {Sno:1,
//   name:'Mobile',
//   Price:'7000 Rs',
// avaibality:'Available'},
// {Sno:2,
//   name:'TV',
//   Price:'200000 Rs',
// avaibality:'Not Available'},

// {Sno:3,
//   name:'WashingMachine',
//   Price:'15000 Rs',
// avaibality:'Availabe'},
// {Sno:4,
//   name:'Tab',
//   Price:'18000 Rs',
// avaibality:'Available'}
// ]
Emloyee:any[]=[
  {ID:55,Name:'JOhn',Gender:'Male',DOB:'1/2/1995',Company:'Infosys',Salary:55000},
  {ID:51,Name:'Nandini',Gender:'Female',DOB:'12/7/1993',Company:'Tech-Mahindra',Salary:70000},
  {ID:122,Name:'Rahul',Gender:'Male',DOB:'13/4/1990',Company:'TCS',Salary:85000},
  {ID:100,Name:'Ganesh',Gender:'Male',DOB:'12/5/1989',Company:'Wipro',Salary:65000},
  {ID:201,Name:'Radha',Gender:'Female',DOB:'3/2/1980',Company:'Infosys',Salary:55000},
  {ID:102,Name:'Pooja',Gender:'Female',DOB:'12/2/1995',Company:'TCS',Salary:50000},
  {ID:101,Name:'JOhn',Gender:'Male',DOB:'7/7/1993',Company:'Teck-Mahindra',Salary:70000},
  {ID:27,Name:'Komal',Gender:'Female',DOB:'8/10/1997',Company:'TCS',Salary:60000}
]
  constructor() { }

  ngOnInit() {
  }

}
