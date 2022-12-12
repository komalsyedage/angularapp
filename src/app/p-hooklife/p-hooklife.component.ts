import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-p-hooklife',
  templateUrl: './p-hooklife.component.html',
  styleUrls: ['./p-hooklife.component.css']
})
export class PHooklifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy{
@Input() value:any;
show:boolean=false;

//@ContentChild("child",{static: false}) contentChild: ElementRef; OR
@ViewChild("childhook",{static: false}) viewChild: ElementRef;
  constructor() {
    console.log("1.constructor called");
    
   }
  ngOnDestroy(): void {
    console.log("9.ngOnDestroy Called");
    
  }
  ngAfterViewChecked(): void {
    console.log("8.ngAfterViewChecked Called");
    
  }
  ngAfterViewInit(): void {
    console.log("7.ngAfterViewInit Called");
    
  }
  ngAfterContentChecked(): void {
    console.log("6.ngAfterContentChecked called");
    
  }
  ngAfterContentInit(): void {
    console.log("5.ngAfterContentInit Called");
    
  }
  ngDoCheck(): void {
   console.log("4.ngDoCheck Called");
   
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("2.ngOnChanges Called", changes);
    
  }

  ngOnInit() {
    console.log("3.ngOnInit Called");
    
  }

}
