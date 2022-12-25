import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '' , redirectTo: 'login', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},// localhost://4200/aboutus
  { path:'product', component: ProductComponent}, // localhost://4200/product
  { path:'contactus', component: ContactusComponent},
  { path:'gallery', component: GalleryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'news',component: NewsComponent},
  { path: 'admission',component: AdmissionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
