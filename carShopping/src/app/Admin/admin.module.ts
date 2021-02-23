import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarEditComponent } from './car-edit/car-edit.component'
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    CarFormComponent,
    CarListComponent,
    NavComponent,
    CarEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports:[
    CarFormComponent
  ]
})
export class AdminModule { }
