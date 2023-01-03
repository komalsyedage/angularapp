import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

@Injectable({
  providedIn: 'root'
})

export class UnsavedChangesGuard implements CanDeactivate<AdduserComponent>{
  
  canDeactivate(component: AdduserComponent){
if(component.userName.dirty){
  return window.confirm('You Have unsaved Changes.Are u sure want to navigate?')
}else{
  return false
}
  }
}
