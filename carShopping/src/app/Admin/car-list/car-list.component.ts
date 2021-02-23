import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit ,AfterViewInit {
  Cars:Car[]|any=[]


  displayedColumns: string[] = [ 'model', 'price', 'actions'];
  constructor(
    private carSer:CarService
  ) { }



  ngOnInit(): void {


   
  }
  ngAfterViewInit(): void{
    this.getCar()
console.log(this.Cars);

  }
  deleteCar(id:number){

  }
getCar(){
    this.Cars=this.carSer.getCars()


}
  

  
}
