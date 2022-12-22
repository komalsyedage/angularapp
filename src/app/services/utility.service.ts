import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' //service ko apply kr sakte ho
})
export class UtilityService {
// uname='mm'; 
 userName=new BehaviorSubject ('Angular UI Developer');//bydefault value add
//userName=new Subject<any>();
  constructor() {
  
   }
   getData(){
    this.userName.subscribe(res=>{
      
    })
   }
}
