import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   checkUserNameandPassword(firstname: string, pwd: string){
if(firstname =='admin' && pwd == 'admin123' ){
localStorage.setItem('firstname' , 'admin')
return true;
  }
  else{
    return false;
  }
}
}