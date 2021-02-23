import { BrowserModule } from '@angular/platform-browser';
import {   NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { CarsModule } from './cars/cars.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { AdminModule } from './Admin/admin.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CarsModule,
    HttpClientModule,
    HomeModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
