import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee1 } from '../models/AssForm';

@Component({
  selector: 'app-tform-assignment',
  templateUrl: './tform-assignment.component.html',
  styleUrls: ['./tform-assignment.component.css']
})
export class TFormAssignmentComponent implements OnInit {
  default:string='Advanced';
  defaultValue:string = 'Advanced';
  emp= new Employee1();
  submitted: boolean= false;
  reArray:any={};
  
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    this.submitted = true;
    this.emp.username = form.value.userDetails.username;
    this.emp.email = form.value.userDetails.email;
    this.emp.subscription = form.value.userDetails.subscription;
    this.emp.password = form.value.userDetails.password;
    
    console.log(form.controls);
    
      }
      saveEmployeeData(emp:Employee1){
    console.log(emp.username);
    console.log(emp.email);
    console.log(emp.subscription);
    console.log(emp.password);
      }
  
}
