import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdmissionComponent } from './admission/admission.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemoComponent } from './demo/demo.component';
import { DemopostComponent } from './demopost/demopost.component';
import { ArduinoComponent } from './electronics/arduino/arduino.component';
import { BuzzerComponent } from './electronics/buzzer/buzzer.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MicrochipComponent } from './electronics/microchip/microchip.component';
import { RasberrypiComponent } from './electronics/rasberrypi/rasberrypi.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';


import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TVComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { PostService } from './services/post.service';
import { UnsavedChangesGuard } from './unsaved-changes.guard';





const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},// localhost://4200/aboutus
  // localhost://4200/product
 // { path:'contactus', component: ContactusComponent},
 
  { path: 'postdetails/:id',component:PostdetailsComponent},// {path:'post'}
  { path: 'gallery', component: GalleryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'news',component: NewsComponent},
  { path: 'admission',component: AdmissionComponent},
  { path: 'post', component: DemopostComponent }, 
  
  { path: 'postdetails/:id', component: PostdetailsComponent},
  {path: 'adduser' ,component: AdduserComponent, canDeactivate: [UnsavedChangesGuard]},
  { path: 'product',canActivate: [AuthGuard], loadChildren: './product/product.module#ProductModule'}, 
  //called on demand means on click lazy loading syntx
  //./folder name/modulename # class name//called on click show on console
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},

 
  { path:'**',component: PagenotfoundComponent}// wild card page not found if url is wrong
];


@NgModule({
  imports: [RouterModule.forRoot(routes )],//,{preloadingStrategy: PreloadAllModules}
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('Routing Module Called');
    
  }
 }
