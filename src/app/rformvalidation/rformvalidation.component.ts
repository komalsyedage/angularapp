import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emp } from '../models/emp';
import { Employee } from '../models/employee';
import { CandeactivateService, IDeactivecomponent } from '../services/candeactivate.service';

@Component({
  selector: 'app-rformvalidation',
  templateUrl: './rformvalidation.component.html',
  styleUrls: ['./rformvalidation.component.css']
})
export class RFormvalidationComponent implements OnInit,IDeactivecomponent {

  employee: any;
  submitted: boolean = false;
  
  constructor(private _comp: CandeactivateService) { 
    
  }

ngOnInit(){
    
  }
 registerform= new FormGroup({

  firstname: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(7),
    Validators.pattern("[a-zA-Z].*")]),
   lastname: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required,Validators.max(12),Validators.min(10),Validators.pattern("[0-9]*")]),
      city: new FormControl('Mumbai',[Validators.required]),
      gender: new FormControl('f',[Validators.required]),
      pwd: new FormControl('',[Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
       cwd:new FormControl('',[Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
  })
  registerSubmitted(){
    console.log(this.registerform);
    
  }
  OnSubmit()
  {
   
    
  }

  canExit(){
    if(this.registerform.dirty){//this.firstname || this.lastname || this.email || this.mobile || this.city
     // || this.gender || this.pwd || this.cwd
      return  confirm('You have unsaved changes.Do you want to discard these changes?');
      }else{
        return true;
      }
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
  get Pwds(){
    return this.registerform.get('pwd') as FormControl;
  }
  get Cwds(){
    return this.registerform.get('cwd') as FormControl;
  }
  
  }

  


