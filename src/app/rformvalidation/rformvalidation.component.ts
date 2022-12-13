import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rformvalidation',
  templateUrl: './rformvalidation.component.html',
  styleUrls: ['./rformvalidation.component.css']
})
export class RFormvalidationComponent implements OnInit {
  myReactiveForm: FormGroup;
  

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.myReactiveForm=new FormGroup({
      'username':new FormControl('', [Validators.required]),//Validators.minLength(5),
        //'' we write default value []=for multiple 
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required])
      
    });
    }
    OnSubmit(){
      console.log(this.myReactiveForm);
      
    };
}
