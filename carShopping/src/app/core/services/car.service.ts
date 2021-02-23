import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, noop, Observable } from 'rxjs';
import { Car } from '../models/car.model';
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
  let Cars :any =[]
 this.fs.collection('cars').snapshotChanges().subscribe(cars=>{
  cars.map(car=>{
    let c:any  =  car.payload.doc.data()
c.id =car.payload.doc.id
Cars.push(c)
  })
  })
  return Cars

 }
getCar(id:string){
return  this.fs.collection('cars').doc(id)
    

   }

 addCars(car:Car){
  const albumss= []
  albumss.push("https://www.bmw.ht/content/dam/bmw/common/all-models/x-series/x3/2019/inspire/bmw-x3-inspire-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1550231301477.jpg")
  albumss.push("https://www.bmw.ht/content/dam/bmw/common/all-models/x-series/x3/2019/inspire/bmw-x3-inspire-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1550231301477.jpg")

   let imgg ={
    feature:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https%3A%2F%2Fcdni.autocarindia.com%2FExtraImages%2F20201102054838_BMW-X3-M.jpg&h=795&w=1200&c=0"
   , albums : albumss
   }
car.image = imgg
    return this.fs.collection(`cars`).add(Object.assign({},car))
 }
}
