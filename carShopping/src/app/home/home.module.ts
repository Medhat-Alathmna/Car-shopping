import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material/material.module';
import { FeaturedComponent } from './featured/featured.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsModule } from '../cars/cars.module';
import { CarsComponent } from '../cars/cars/cars.component';
import { CarRoutingModule } from '../cars/car-routing.module';
import { CarDetailsComponent } from '../cars/car-details/car-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,children:[
      
  {path: 'cars',
  component:CarsComponent,children:[
    {
      path:':id',component:CarDetailsComponent
    }
  ]

}
    ]
  
  }
];
@NgModule({
  declarations: [HomePageComponent,
  FeaturedComponent,
  
],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    CarsModule,
    CarRoutingModule

   
  ],
  exports: [
    RouterModule
  ]
 
})
export class HomeModule { }
