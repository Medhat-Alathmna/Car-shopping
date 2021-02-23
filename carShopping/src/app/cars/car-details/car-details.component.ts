import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  id!:string
  car:any
  private sub: any;
  
  constructor( private carSer:CarService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  const route = this.route.snapshot.params.id 

 this.car =this.carSer.getCar(route).snapshotChanges().subscribe(selected=>{
   this.car =   selected.payload.data()

 })
 
  


 
  }

  // getCar(){
  //   this.carSer.selectedCarEmitter.subscribe(lo=>{
  //     this.car=lo
  //   })


  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
 
}
