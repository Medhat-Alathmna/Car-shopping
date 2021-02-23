import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';

import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarRoutingModule } from './car-routing.module';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    CarComponent,
    CarsComponent,
    CarDetailsComponent
  ],
  imports: [
    CarRoutingModule,
    CommonModule,
    MaterialModule,
    
  ],
  exports:[
    CarsComponent
    
  ]
})
export class CarsModule { }
