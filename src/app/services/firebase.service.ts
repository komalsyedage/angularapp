import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebasePost } from '../models/firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
users:any[]=[
  {id:'1',name:'Jack',gender:'Male'},
  {id:'2',name:'John',gender:'Male'},
  {id:'3',name:'Lili',gender:'FeMale'}
]
  constructor(private _httpclient:HttpClient) { }
url ='https://angular-crud-39714-default-rtdb.firebaseio.com/';

  createPost(){
let postData={
  title:'This is Angular-8 CRUD',
  content:'This is Firebse operation with post'
}
 return this._httpclient.post(this.url + 'posts.json',postData)  }

 createpostDataReactiveform(firebasepost: FirebasePost){//class name
  
  return this._httpclient.post(this.url + 'posts.json',firebasepost)  //instance of class
 }
 getpostData(){
  return this._httpclient.get(this.url + 'posts.json');
 }
}

