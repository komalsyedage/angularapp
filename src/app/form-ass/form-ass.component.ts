import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Employe } from "../models/employee1";

@Component({
  selector: "app-form-ass",
  templateUrl: "./form-ass.component.html",
  styleUrls: ["./form-ass.component.css"],
})
export class FormAssComponent implements OnInit {
  employee1 = new Employe();
  submitted: boolean;
  mobNumberPattern="/^+91(7\d|8\d|9\d)\d{9}$/";
 
  constructor() {}

  ngOnInit() {}

  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.employee1.name = form.value.name;
    this.employee1.DateOfBirth = form.value.DateOfBirth;
    this.employee1.gender = form.value.gender;
    this.employee1.Email = form.value.Email;
    this.employee1.Address = form.value.Address;
    this.employee1.College = form.value.College;
    this.employee1.Department = form.value.Department;
    this.employee1.MobileNo = form.value.MobileNo;
    this.saveEmployee(this.employee1);
  };
  saveEmployee(emp:Employe) {
    console.log(emp.name);
    console.log(emp.DateOfBirth);
    console.log(emp.gender);
    console.log(emp.Email);
    console.log(emp.Address);
    console.log(emp.College);
    console.log(emp.Department);
    console.log(emp.MobileNo);
  }
}
