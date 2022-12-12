import { AfterContentInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-p-hooklife',
  templateUrl: './p-hooklife.component.html',
  styleUrls: ['./p-hooklife.component.css']
})
export class PHooklifeComponent implements OnInit , OnChanges,DoCheck ,AfterContentInit{
@Input() value:any;

  constructor() {
    console.log("constructor called");
    
   }
  ngAfterContentInit(): void {
    console.log("ngAfterInit Called");
    
  }
  ngDoCheck(): void {
   console.log("ngDoCheck Called");
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called",changes);
    
  }

  ngOnInit() {
    console.log("ngOnInit Called");
    

  }

}
