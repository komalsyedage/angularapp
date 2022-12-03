import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges{
@Input() userid:number;

  constructor() {
    console.log('Constructor Fisrt called');
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called second');
    for(const propname in changes){
      const prop=changes[propname];
      const{previousValue,currentValue,firstChange}=prop;
      console.log(`prop name ${propname}`);
      console.log(`previous value ${previousValue}`);
      console.log(`current  value ${currentValue}`);
      console.log(`first name ${firstChange}`);
      }
  }

  ngOnInit() {
  }

  

}

 