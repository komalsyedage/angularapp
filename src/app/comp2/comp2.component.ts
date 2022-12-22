import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.userName.subscribe( res => {
   this.userName = res;
   console.log(res)})
   
  }
  ngOnInit() {
  }

  updateUserName(uname){
    // console.log(uname.value);
    // this._utilityService.userName.next(uname.value)
    //next method is used to send message to an observable i.e userName
    let emp ={
      id:100,
      Name:'Mahi',
      Section:'section 1',
      MobileNo:'9988776655'
        
      }
      this._utilityService.userName.next(JSON.stringify(emp))
    }
  }

