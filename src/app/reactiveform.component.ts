import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FirebasePost } from './models/firebase';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted: boolean = false;
  notAllowedNames = ['Codemind', 'Technology'];
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
  myReactiveForm: FormGroup;
  firebasePost: FirebasePost;

  constructor(private _firebaseservice: FirebaseService) { 
    this.createForm();
  }

  ngOnInit() {
    this._firebaseservice.getpostData().subscribe(res=> {
      console.log('getpostData',res);
      
    })
   // console.log(this.myReactiveForm['controls'].userDetails['controls'].username.value);

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    // }, 3500);

    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 3500);
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl('', [Validators.required, Validators.email], this.NaEmails)
      }),
      'course': new FormControl(''),
      'gender': new FormControl(''),
      'skills': new FormArray([
       new FormControl(null, Validators.required)
      ])
    })
  }
  OnSubmit()
  {
    this.submitted = true;
   // console.log(this.myReactiveForm);
   // console.log(this.firebasePost=this.myReactiveForm['controls'].userDetails['controls'].username.value);
    
        
   this.firebasePost=new FirebasePost();
   this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
   this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
   this.firebasePost.course = this.myReactiveForm['controls'].course.value;
   this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
  this.firebasePost.skills = this.myReactiveForm['controls'].skills.value
//console.log('firebase post',this.firebasePost);

   this._firebaseservice.createpostDataReactiveform(this.firebasePost).subscribe(res => {
   // console.log('post from reactive form',res);
    
  })
    
  }
  OnAddSkills() {
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  NaNames(control:FormControl)
  {  
    //  this.notAllowedNames=   api/getNams 
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    }
    return null;
  }
  NaEmails(control:FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com'){
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

  

}
