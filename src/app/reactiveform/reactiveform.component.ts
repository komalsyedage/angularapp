import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';


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
  constructor(private _fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
    
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
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
    //     'email': new FormControl('', [Validators.required, Validators.email], this.NaEmails)
    //   }),
    //   'course': new FormControl(''),
    //   'age':new FormControl('',Validators.required),
    //   'gender': new FormControl(''),
    //   'skills': new FormArray([
    //    new FormControl(null, Validators.required)
    //   ])
    // })
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      age:['',Validators.required],
      skills: this._fb.array([])
    })

  }
  OnSubmit()
  {
    this.submitted = true;
    console.log(this.myReactiveForm);
    
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
  OnAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
   }
  Ondelete(i){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(i)
    }
 
  
}