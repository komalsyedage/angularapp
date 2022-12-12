import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
title:string='Databiding ';
dis=true;
name:string="Komal Dhone";
  constructor() { }

  ngOnInit() {
  }
change(){
  this.title="Complete two Types Of Databindig"
}
delete(){
  this.name=' ';
}
}
