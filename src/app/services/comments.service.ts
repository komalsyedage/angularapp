import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { devAPIUrl } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
 // apiURL = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  getPost(){
    return this.http.get(`${devAPIUrl}comments`);//api end point
  }
  getTodo(){
    return this.http.get(`${devAPIUrl}todos`);
  } 
}