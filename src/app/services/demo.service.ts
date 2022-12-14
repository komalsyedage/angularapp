import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  // apiURL = 'https://jsonplaceholder.typicode.com/users';
  apiURL = 'https://jsonplaceholder.typicode.com/'; //hardcoded URL

  products = [
    {name: 'Laptop', id:'101'},
    {name: 'TV', id:'102'},
    {name: 'Mobile', id:'103'},

  ]
  constructor(private http: HttpClient) { }

  display(){
    alert('Subscribed successfully');
  }

  getUsersData()
  {
    let users = 'users';
    return this.http.get(this.apiURL+ users)
  // OR return  this.http.get(this.apiURL);
    
  }
  getDataPosts(){
    let posts = 'posts';
    return this.http.get(this.apiURL+ posts);
  }
}
