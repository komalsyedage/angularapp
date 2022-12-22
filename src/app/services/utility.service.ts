import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' //service ko apply kr sakte ho
})
export class UtilityService {
  

 // userName=new BehaviorSubject ('Angular UI Developer');//bydefault value add
userName=new Subject<any>();
  constructor(private _utilityService: UtilityService) {
  
   }
}
