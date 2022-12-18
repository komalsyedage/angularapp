import { variable } from '@angular/compiler/src/output/output_ast';
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

  employee: any;
  submitted: boolean = false;
 

  constructor() { 
    
  }

ngOnInit(){
    
  }
 registerform= new FormGroup({

  firstname: new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(5),
    Validators.pattern("[a-zA-Z].*")]),
   lastname: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
      city: new FormControl('Mumbai',[Validators.required]),
      gender: new FormControl('f',[Validators.required]),
      pwd: new FormControl('',[Validators.required]),
     
  })
  registerSubmitted(){
    console.log(this.registerform);
    
  }
  OnSubmit()
  {
   
    
  }
  get Firstname(){
    return this.registerform.get('firstname') as FormControl;
  }
  get Lastname(){
    return this.registerform.get('lastname') as FormControl;
  }
  get Email(){
    return this.registerform.get('email') as FormControl;
  }
  get Mobile(){
    return this.registerform.get('mobile') as FormControl;
  }
  get City(){
    return this.registerform.get('city') as FormControl;
  }
  get Gender(){
    return this.registerform.get('gender') as FormControl;
  }
  get Pwd(){
    return this.registerform.get('pwd') as FormControl;
  }
  }

  


