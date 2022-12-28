import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElerasDirective } from '../eleras.directive';


//shared module
@NgModule({
  declarations: [ElerasDirective],
  imports: [
    CommonModule,
   
  ],
  exports: [ElerasDirective]
})
export class ElerasberyModule { }
