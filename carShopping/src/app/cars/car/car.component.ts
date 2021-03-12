import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  @Input() car!: Car;
  
  constructor( private carSer:CarService, private router : Router) { }

  ngOnInit(): void {
    

  }

  addCart(){

  }

  selectedCar(){
    this.carSer.selectedCar.next(this.car)
    // this.router.navigateByUrl(`/cars/${this.car.id}`)
    
  }

}
