import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { CarsModule } from './cars/cars.module';
import { HomePageComponent } from './home/home-page/home-page.component';

const routes: Routes = [
  
  {
  path: '',
  component: HomePageComponent,

  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
     
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
   
    }
  ]
},
{
  path: 'admin',
  loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
