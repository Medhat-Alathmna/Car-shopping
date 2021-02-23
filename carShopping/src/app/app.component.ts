import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from './core/services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'carShopping';
url: string | undefined
  constructor(private route: Router,private c  :CarService){

  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.get_curent_router()

    },100) 
  }

get_curent_router(){
this.c.cuurentRouterEmitter.subscribe(route=>{
  this.url = route
  console.log(route);
  
})
}
}
