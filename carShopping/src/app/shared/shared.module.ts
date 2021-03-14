import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material/material.module';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
  FooterComponent,
  SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[
    HeaderComponent,
  FooterComponent,
  RouterModule
  ]
})
export class SharedModule { }
