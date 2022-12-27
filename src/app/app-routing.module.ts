import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';


import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TVComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';





const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},// localhost://4200/aboutus
  { path:'product', component: ProductComponent,children: [//http://localhost:4200/product
  {path:'laptop',component: LaptopComponent},
  {path:'tablet',component: TabletComponent},//http://localhost:4200/tablet
  {path:'tv',component: TVComponent},
  {path:'washingmachine',component: WashingmachineComponent}]}, // localhost://4200/product
  { path:'contactus', component: ContactusComponent},
  { path:'gallery', component: GalleryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'news',component: NewsComponent},
  { path: 'admission',component: AdmissionComponent},
  { path:'**',component: PagenotfoundComponent}// wild card page not found if url is wrong
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
