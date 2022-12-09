import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-ass',
  templateUrl: './form-ass.component.html',
  styleUrls: ['./form-ass.component.css']
})
export class FormAssComponent implements OnInit {

  constructor() { }

  ngOnInit() {

}
OnSubmit(form: NgForm){
  console.log(form);
}
}