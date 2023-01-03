import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RFormvalidationComponent } from '../rformvalidation/rformvalidation.component';
export interface IDeactivecomponent{
  canExit: ()=> Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements  CanDeactivate<IDeactivecomponent>{
canDeactivate(component: IDeactivecomponent)
  {
   return component.canExit();
  }
 // constructor() { }
}
