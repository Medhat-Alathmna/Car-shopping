import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, noop, Observable } from 'rxjs';
import { Thumbs } from 'swiper';
import { Car } from '../models/car.model';
import { Details } from '../models/details.model';
import { Images } from '../models/images.model';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  public selectedCar: BehaviorSubject<Car> = new BehaviorSubject<Car>(null!);
  public selectedCarEmitter: Observable<Car> = this.selectedCar.asObservable();

  public Search: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>(null!);
  public SearchEmitter: Observable<Car[]> = this.Search.asObservable();

  public cuurentRouter: BehaviorSubject<string> = new BehaviorSubject<string>(null!);
  public cuurentRouterEmitter: Observable<string> = this.cuurentRouter.asObservable();
  Cars:Car[]=[]
  car = new Car()
  model : Car[] = []
  constructor(private fs:AngularFirestore) { }

 id = this.fs.createId();
 


  

 getCars(){
   
 
  
 this.fs.collection('cars').snapshotChanges().subscribe(cars=>{
  cars.map(car=>{
    let c:any  =  car.payload.doc.data()
    this.car.id=car.payload.doc.id
    this.car.details=c.details
    this.car.image=c.image
    this.car.model=c.model
    this.car.onSale=c.onSale
    this.car.price=c.price
    this.model.push(this.car)
    this.Search.next(this.model)
    this.Cars.push(this.car)
  })
  })
  return this.Cars

 }

getCar(id:string){
return  this.fs.collection('cars').doc(id)
    

   }

 addCars(car:Car){
  
  
   

    return this.fs.collection(`cars`).add(Object.assign({},car))
 }
}
