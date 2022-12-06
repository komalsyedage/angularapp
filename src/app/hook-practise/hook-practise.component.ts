import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-practise',
  templateUrl: './hook-practise.component.html',
  styleUrls: ['./hook-practise.component.css']
})
export class HookPractiseComponent implements OnInit ,OnChanges{
@Input() userId:number;

  constructor() {
    console.log("1.HooksComponent constructor called");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propname in changes) {
      const prop=changes[propname];
      const{ previousValue, currentValue, firstChange}=prop;
      console.log(`prev value ${previousValue}`);
      console.log(`previous value ${currentValue}`);
      console.log(`first change ${firstChange}`);
      console.log("===============================");
      
      
      
      
        
      }
    
    console.log("2.HooksComponent ngOnchanges called");
    
  }
//bydefalult angular provide one hook 
  ngOnInit() {
    console.log("HooksComponent ngOnit called");
    
  }

}
