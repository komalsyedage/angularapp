import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
name: string = "Suhas";
education1: any[];
getChildData(argument){
this.education1 = argument;
// this.education.push(value);
console.log(this.education1);

}
  constructor() { }

  ngOnInit() {
  }
  remove(value){
    this.education1.splice(value.target.value,1);
  }
  
}
