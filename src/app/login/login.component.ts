import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route: Router) { }//for checkuser

  ngOnInit() {
  }

registerForm= new FormGroup({
  firstname: new FormControl(""),
  lastname: new FormControl(""),
  email: new FormControl(""),
  mobile: new FormControl(""),
  gender: new FormControl("f"),
 
  pwd: new FormControl(""),
  rwd: new FormControl("")
})
registerSubmit(){
  console.log(this.registerForm);
  
}
checkUser(firstname,lastname,email,
  mobile,gender,pwd,rwd){
    if(firstname== 'admin' && pwd== 'admin')
    {
      this._route.navigate(['product/laptop']);
    }
    

}

}
