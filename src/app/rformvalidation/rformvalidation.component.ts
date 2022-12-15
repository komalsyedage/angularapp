import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emp } from '../models/emp';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-rformvalidation',
  templateUrl: './rformvalidation.component.html',
  styleUrls: ['./rformvalidation.component.css']
})
export class RFormvalidationComponent implements OnInit {
  myReactiveForm: FormGroup;
  employee: any;
  submitted: boolean;
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]
  

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm=new FormGroup({
      'fname':new FormControl('', [Validators.required,Validators.maxLength(5),Validators.minLength(4),Validators.pattern('[a-zA-Z]*')]),//Validators.minLength(5),
        //'' we write default value []=for multiple 
        'lname':new FormControl('',[Validators.required,Validators.maxLength(10)]),
        'age':new FormControl('',[Validators.required,Validators.min(17),Validators.max(20)]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phone':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
      'city':new FormControl('',Validators.required),
      'gender':new FormControl('Female',Validators.required),
      'password':new FormControl('',[Validators.required]),
      'confermpass':new FormControl('',[Validators.required]),
      
      
    });
    }
    OnSubmit(form: FormControl){
      console.log(this.myReactiveForm);
      this.submitted=true;
      this.employee.fname=form.value.fname;
      this.employee.email=form.value.email;
    };
    
  saveEmployeeData(emp:Emp) {
    console.log(emp.fname)
      
      
      
      
      
    
  }
}
