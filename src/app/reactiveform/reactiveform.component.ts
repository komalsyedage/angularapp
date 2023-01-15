import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { from, interval, Observable } from 'rxjs';
import { FirebasePost } from '../models/firebase';
import { FirebaseService } from '../services/firebase.service';
import{filter, map, take, takeLast, toArray}from 'rxjs/operators'

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
  constructor(private _fb:FormBuilder,private _firebaseservice: FirebaseService) { 
    this.createForm();
  }

  ngOnInit() {
    // const data=from(this._firebaseservice.users) ;//make custome observable
    // // observable method pipe combine multple operator
    // data.pipe(
    //   filter(u=>u.gender=='Male'),
    //   toArray()//RXJs operator
    // ).subscribe(res=>{
    //   console.log('Filter Operaor',res);
      
    // })
//take operator
// const source= interval(10);
// source.pipe(take(5)).subscribe(res =>{
//   console.log('interval example',res);}
//   )
//take last
let random=["codemind","Technology","Angular","HTML"];
const source= from(random);
source.pipe(takeLast(2)).subscribe(res =>{
  console.log('Take Last Operator',res);
  
})

    // data.pipe(
    //   map(x => x.name + 'data')
    // ).subscribe(res => {
    //   console.log('res',res);
      
    // })
    // this._firebaseservice.getpostData().pipe(
    //   map(responseData=>{
    //     //empty array
    //     const postaray=[];
    //     //for in loop
    //     for(const key in responseData){
    //       if(responseData.hasOwnProperty(key)){
    //         //push new value into array
    //         postaray.push({...responseData[key],id:key})
    //       }

    //     }
    //     return postaray;
    //   })
    // ).subscribe(res => {
    //   console.log('After manupulate Data',res);
      
    // }
   //   )
    // data.subscribe(res=> {

    //   console.log('Example of from Operattor==>',res.name);
    // })
    
    
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
      gender: ['Female'],
      age:['',Validators.required],
      skills: this._fb.array([])
    })

  }
  OnSubmit()
  {
    this.submitted = true;
    console.log(this.myReactiveForm);
    console.log(this.firebasePost=this.myReactiveForm['controls'].userDetails['controls'].username.value);
    
        
   this.firebasePost=new FirebasePost();
   this.firebasePost.username = this.myReactiveForm['controls'].userDetails['controls'].username.value;
   this.firebasePost.email = this.myReactiveForm['controls'].userDetails['controls'].email.value;
   this.firebasePost.course = this.myReactiveForm['controls'].course.value;
   this.firebasePost.gender = this.myReactiveForm['controls'].gender.value;
  this.firebasePost.skills = this.myReactiveForm['controls'].skills.value
   console.log('firebase post',this.firebasePost);

   this._firebaseservice.createpostDataReactiveform(this.firebasePost).subscribe(res => {
   console.log('post from reactive form',res);
   })
    
  }
  getDataFromFirebase(){
    this._firebaseservice.getpostData().subscribe(res=>{
      console.log('get from firebase',res);
      
    })
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
