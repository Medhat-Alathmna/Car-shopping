import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes =[
  {
    path:'',
    component:NavComponent,
    children:[
     { path:'create',
       component:CarFormComponent
      },
      {
        path: '',
        component: CarListComponent
      },
     { path:'carlist',
       component:CarListComponent
      },
     { path:'edit/:id',
       component:CarEditComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
