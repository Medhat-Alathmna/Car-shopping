import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, noop, Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { Details } from '../models/details.model';
import { Images } from '../models/images.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  public selectedCar: BehaviorSubject<Car> = new BehaviorSubject<Car>(null!);
  public selectedCarEmitter: Observable<Car> = this.selectedCar.asObservable();

  public cuurentRouter: BehaviorSubject<string> = new BehaviorSubject<string>(null!);
  public cuurentRouterEmitter: Observable<string> = this.cuurentRouter.asObservable();

  constructor(private fs:AngularFirestore) { }

 id = this.fs.createId();
 


  

 getCars(){
   
  let Cars:Car[]=[]
  let car1 = new Car()
  
 this.fs.collection('cars').snapshotChanges().subscribe(cars=>{
  cars.map(car=>{
    let c:any  =  car.payload.doc.data()
    car1.id=car.payload.doc.id
    car1.details=c.details
    car1.image=c.image
    car1.model=c.model
    car1.onSale=c.onSale
    car1.price=c.price
    Cars.push(car1)
  })
  })
  return Cars

 }

getCar(id:string){
return  this.fs.collection('cars').doc(id)
    

   }

 addCars(car:Car){
  
  
   

    return this.fs.collection(`cars`).add(Object.assign({},car))
 }
}
