import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Emp } from '../models/emp';
import { Epmp } from '../models/Empp';

@Component({
  selector: 'app-s-form',
  templateUrl: './s-form.component.html',
  styleUrls: ['./s-form.component.css']
})
export class SFormComponent implements OnInit {
  fname:string;
  lname:string;
  genderss:string;
  default: string="Mumbai";
  employees= new Epmp();
  submitted: boolean=false;
  defaultgender: string="Female";
  gender:string;


  minage:number=18;
  genders=[
    {
      id:'1',value:'Male'
    },
    { id:'2',value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
OnSubmit(form: NgForm){
  this.submitted=true;
  this.employees.fname=form.value.fname;
  this.employees.lname=form.value.lname;
  this.employees.age=form.value.age;
  this.employees.email=form.value.email;
  this.employees.phone=form.value.phone;
  this.employees.city=form.value.city;
  this.employees.gender=form.value.gender;
  this.employees.password=form.value.password;
  this.employees.confirmpass=form.value.confirmpass;
  this.saveEmployeeData(this.employees)
  form.reset();
    form.controls['city'].setValue('Mumbai');
    form.controls['gender'].setValue('Female')
  console.log(form);
}
saveEmployeeData(emp:Epmp) {
  console.log(emp.fname);
  console.log(emp.lname);
  console.log(emp.age);
  console.log(emp.email);
  console.log(emp.phone);
  console.log(emp.city);
  console.log(emp.gender);
  console.log(emp.password);
  console.log(emp.confirmpass);

  
}
}
