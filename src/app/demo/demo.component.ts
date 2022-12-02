import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
//@Input() employeename:any;
//@Input() bank:any;
@Output() newItemEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
   // console.log(this.employeename);
    //console.log(this.bank);
      }
      //function with call once user enter text box value
    addNewItem(value:string){
      this.newItemEvent.emit(value);
    }
}
