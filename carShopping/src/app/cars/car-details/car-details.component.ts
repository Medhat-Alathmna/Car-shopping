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
  car !:Car
  details:any
  private sub: any;
  
  constructor( private carSer:CarService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
  const route = this.route.snapshot.params.id 
 this.carSer.getCar(route).snapshotChanges().subscribe(selected=>{
   let car = selected.payload.data() as Car
   this.car =   car
// let inedx = 0
// console.log( this.car.details?.features![2]);

//    this.car.details?.features?.forEach(item=>{
//     inedx= inedx +1 
// if(inedx == 3)   {
//   console.log(item);
  
// }
//   })

  })
 
  


 
  }

  // getCar(){
  //   this.carSer.selectedCarEmitter.subscribe(lo=>{
  //     this.car=lo
  //   })


  // 

 
 
}
