import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Employee } from "../models/employee";

@Component({
  selector: "app-simpletemplateform",
  templateUrl: "./simpletemplateform.component.html",
  styleUrls: ["./simpletemplateform.component.css"],
})
export class SimpletemplateformComponent implements OnInit {
  default: string = "Angular";
  employee = new Employee();
  submitted: boolean = false;
  defaultgender:string="Female";
  genderss:string;
genders=[
  {
    id:'1',value:'Male'
  },
  { id:'2',value:'Female'}
]
  constructor() {}

  ngOnInit() {}

  OnSubmit(form: NgForm) {
    this.submitted=true;
    this.employee.course=form.value.course;
    this.employee.username=form.value.userdetail.username;
    this.employee.email=form.value.userdetail.email;
    //this.genders=form.value.gender OR
    this.employee.gender=form.value.gender
    //this.saveEmployeeData(this.employee)
    form.reset();
    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Male')
    console.log(form.controls);
    
  };

  saveEmployeeData(emp:Employee) {
    console.log(emp.course);
  }
  minDate:any = "2022-12-11";

}
