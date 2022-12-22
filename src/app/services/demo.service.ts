import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL ='https://jsonplaceholder.typicode.com/users';//fake API  url backend
 
  // display(){
  //   alert('subscribed successfully')
  // }

//   products=[
//   {name:'Laptop',Id:'101'},
//   {name:'Tv',Id:'102'},
//   {name:'Mobile',Id:'104'}
// ]

constructor(private http: HttpClient)//server se data lena DI=inject kel provide angular
{ }

// getuserData(){
//   let apiurl="https://jsonplaceholder.typicode.com/users";
//   return this.http.get(apiurl);
//  }

getUsersData(){
 // let users='user'
  return this.http.get(this.apiURL); //data get 
}
// getposts(){
//    let posts='posts';
//    return this.http.get(this.apiURL + posts);
//  }
}
