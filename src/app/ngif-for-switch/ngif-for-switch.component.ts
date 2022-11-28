import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-for-switch',
  templateUrl: './ngif-for-switch.component.html',
  styleUrls: ['./ngif-for-switch.component.css']
})
export class NgifForSwitchComponent implements OnInit {
  select:string;
  display:string="Komal Dhone";
  constructor() { }
  
  getProductValue(value){
    console.log(value.target.value);
    this.select=value.target.value; //do this for when we click on mobile then only one mobile shown
    
  }
 
condition:boolean;
friendList=[ {name:'Raju',
               age:25},
              {name:'Sandhya',
                age:23},
              {name:'Mahesh',
                age:24},
              {name:'Ganesh',
                age:24},
              {name:'Radha',
                 age:22},
                {name:'Rahul',
                  age:26}]
gettrue(){
  this.condition=true;
}
getfalse(){
  this.condition=false;
}
click(){
  this.display=" "
    }
  ngOnInit() {
  }

}
