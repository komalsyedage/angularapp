import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
todaysDate=new Date();
price:number=80000;
name:string='komal'
//p:number=56.98;
obj={id:'1',name:'test'}
obser;
  constructor(private _utilityService: UtilityService) { 
    this.obser=this._utilityService.userName;

  }

  ngOnInit() {
  }

}
