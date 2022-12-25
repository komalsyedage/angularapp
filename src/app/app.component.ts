import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DemoService } from './services/demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
Data:any=[];
constructor(private _demoService: DemoService){//instance provde angular
  //  this._demoService.getuserData().subscribe(data=>{
   
  //   this.userdata=data;
  //   console.log(data);
    
   }

// get(){
//   this._demoService.getuseData().subscribe(data=>{
//     console.log(data);
//     this.Data=data;
    
//   })

  //  ngOnInit(): void {
  //        this._demoService.getuserData().subscribe(data=> {
  //         console.log('getting data from api', data);
  //         this.Data=data;
      
  //   })
  


  
   
  
  //ngOnInit(): void {
   //call only once coomponent inetialize hone kebad call
  //  this._demoService.getUsersData().subscribe(data => {
  //   console.log('getting data from Api', data);
  //   this.userData=data;
  //   console.log('getting data from array',this.userData);
    
    //this.userData.push(data)
    // this._demoService.getposts().subscribe(results=>{
    //   console.log('posts',results);
      
    //})
  //  })
  
 

//   name:any="Codemind Tecnology"
//   ename:any="Parent Component";
//   title = 'angularapp';
//   Bank:any=[{
//     bankName:"SBI",
//     bankId:'105',
//     bankLocation:'XYZ'
//   },
//   {
//     bankName:"Bank Of India",
//     bankId:'103',
//     bankLocation:'ABC'
//   },
//   {
//     bankName:"STATE BANK",
//     bankId:'102',
//     bankLocation:'NG'
//   },
//   {
//     bankName:"Bank OF Maharashtra",
//     bankId:'100',
//     bankLocation:'BKY'
//   }];
  
//  EmployeeRecords: any = [
//   {
//     ename:'Rakesh',ecity:'pune',esalary:'200000'
//   },
//   {
//     ename:'Mahesh',ecity:'Mumbai',esalary:'50000'
//   },
//   {
//     ename:'Divya',ecity:'Banglor',esalary:'60000'
//   }
//  ]
//  item:any=[];
//  addItem(newItem:string){
//   this.item.push(newItem);
//  }
//  //uid:any;// numer sir take
//  //demo="Hii Angular Developer";

//    public uid:number;
atri:string='Angular Developer'

}

