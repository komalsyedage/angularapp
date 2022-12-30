import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TVComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';

const prodRoutes : Routes =[
  {path:'', component: ProductComponent,children: [//http://localhost:4200/product
  {path:'laptop',component: LaptopComponent},
  {path:'tablet',component: TabletComponent},//http://localhost:4200/tablet
  {path:'tv',component: TVComponent},
  {path:'washingmachine',component: WashingmachineComponent}]},
]
;

@NgModule({
  declarations: [
    ProductComponent,// feature module we say
    LaptopComponent,
    TVComponent,
    TabletComponent,
    WashingmachineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports: [RouterModule,
    UtilityModule]
})
export class ProductModule {
  constructor(){
    console.log('Product Module called');
    
  }
 }
