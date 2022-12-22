import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) { 
     this._utilityService.userName.subscribe( res => {
    this.userName = res
  console.log(res);
  })
    
     }
 ngOnInit() {
}
updateUserName(uname){
    console.log(uname.value);
    //this._utilityService.userName.next(uname.value)
    //next method is used to send message to an observable i.e userName
    let emp ={
    id:100,
    Name:'Jack',
    Section:'section 2',
    MobileNo:'9988966655'
      
    }
    this._utilityService.userName.next(JSON.stringify(emp))
  }
}
