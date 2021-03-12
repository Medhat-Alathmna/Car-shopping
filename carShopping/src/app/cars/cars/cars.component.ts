import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor( private carServ:CarService) { }
  Carss !: Car[]

  ngOnInit(): void {
  this.getCar()
console.log(this.Carss);
    
  
  
  }
  getCar(){
    this.Carss = this.carServ.getCars()
  }
 

}
