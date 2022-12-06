import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit{
@Input() userid:number;
@ContentChild("child",{static:false}) contentChild:ElementRef;
  constructor() {
    console.log('Constructor Fisrt called');
    
   }
  ngAfterViewInit(): void {
    throw new Error('agafterviewinit called');
  }
  ngAfterContentChecked(): void {
  
    console.log('ngafterchecked called');
    
  }
  ngDoCheck(): void {
  
    console.log('ngDoCheck Called');
  }
  ngAfterContentInit(): void {
    console.log('ngaftercontent  Called');
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

 