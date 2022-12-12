import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent implements OnInit {
practise:string='Simple Data Binding';
imagepath:string='assets/images/TypeScriptImage.jpeg';
show:string="property binding";
display:string="Komal Dhone";
value:string="Codemind";
value1:boolean=true;

@Input() name:any;
  constructor() { }
  click(){
this.display=" "
  }
  
  ngOnInit() {
    console.log(this.name);
    
  }

}
