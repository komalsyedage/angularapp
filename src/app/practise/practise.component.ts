import { Component, OnInit } from '@angular/core';

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



  constructor() { }
  click(){
this.display=" "
  }
  
  ngOnInit() {
  }

}
