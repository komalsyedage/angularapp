import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hook-practise',
  templateUrl: './hook-practise.component.html',
  styleUrls: ['./hook-practise.component.css']
})
export class HookPractiseComponent implements OnInit ,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit{
@Input() userId:number;
@ContentChild("child",{static: false}) contentChild: ElementRef;
@ViewChild("childhook",{static: false}) viewChild: ElementRef;
  constructor() {
    console.log("1.HooksComponent constructor called");
    
   }
  ngAfterViewInit(): void {
    console.log("7.ngAfterviewinit called",this.viewChild);
    
  }
  ngAfterContentChecked(): void {
    console.log("6.ngAfterContentChecked called");
    
  }
  ngAfterContentInit(): void {
    console.log('5.ngAfterContentInit called',this.contentChild);
    console.log("view int access",this.viewChild);
    
    this.contentChild.nativeElement.setAttribute("style",'color:green')

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propname in changes) {
      const prop=changes[propname];
      const{ previousValue, currentValue, firstChange}=prop;
      console.log(`prop name ${propname}`);
      console.log(`prev value ${previousValue}`);
      console.log(`current value ${currentValue}`);
      console.log(`first change ${firstChange}`);
      console.log("===============================");
     }
    
    console.log("2.HooksComponent ngOnchanges called");
    
  }
//bydefalult angular provide one hook 
  ngOnInit() {
    console.log("3.HooksComponent ngOnit called");
    
  }

}
