import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from '../services/car.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CarService
  ]
})
export class CoreModule { }
