import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
@Input() employeename:any;
@Input() bank:any;
  constructor() { }

  ngOnInit() {
    console.log(this.employeename);
    console.log(this.bank);
    
    
  }

}
