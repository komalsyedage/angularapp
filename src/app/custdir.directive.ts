import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor( private el:ElementRef , private render:Renderer2) {// dependecies injection 
    //console.log('custome directive applied')
    //el.nativeElement.style.backgroundColor= 'gray';
    render.setStyle(el.nativeElement,'backgroundColor','Yellow')
   }

}
