import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-raective-form',
  templateUrl: './raective-form.component.html',
  styleUrls: ['./raective-form.component.css']
})
export class RaectiveFormComponent implements OnInit {
myReactiveForm: FormGroup;
notAllowedNames=['Codemind','Technology']
genders= [ 
  {
    id:'1',
    value:'male'
  },
{ 
  id:'2',
  value:'Female'
}]
  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }
createForm(){
this.myReactiveForm=new FormGroup({
  'username':new FormControl('', [Validators.required,this.NaNames.bind(this)]),  //Validators.minLength(5),
    //'' we write default value []=for multiple 
  'email':new FormControl('',[Validators.required,Validators.email]),
  'course':new FormControl('Angular',Validators.required),
  'gender':new FormControl('')
});
}
OnSubmit(){
  console.log(this.myReactiveForm);
  
};
NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1){
      return {'namesnotallowed':true}
    }
    return null;
}
}
