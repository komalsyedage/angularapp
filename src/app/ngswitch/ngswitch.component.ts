import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})

export class NgswitchComponent implements OnInit {
  select:string;
  constructor() { }

  ngOnInit() {
  }

  getProductValue(value){
    console.log(value.target.value);
    this.select=value.target.value; //do this for when we click on mobile then only one mobile shown
    
  }
}
