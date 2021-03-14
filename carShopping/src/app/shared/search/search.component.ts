import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit ,OnDestroy{
  myControl = new FormControl();
  Cars:Car[]= []
  options: string[] = [];
  filterValue !: string
  filteredOptions !: Observable<string[]>;
  constructor(
    private carSer:CarService,private route:Router
  ) { }
  ngOnInit() {
    this.getModels()
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      
    //  this.filteredOptions.subscribe(t=>{
    //   return  t.filter(item=>item == this.myControl.value)
    //   })
  }
  ngOnDestroy() {
    // ...
  }
  private _filter(value: any): any[] {
this.filterValue =value.toLowerCase();
  
  return this.options.filter(option => option.toLowerCase().includes(this.filterValue!))


  }
  getModels(){
    this.Cars=[]
    this.options=[]
    this.carSer.SearchEmitter.subscribe((models:Car[])=>{
      models?.forEach(car=>{
        this.options.push(car.model!)
        this.Cars.push(car)
return this.options,this.Cars
      })
   
    })
     


    
  
  
  }
  routeCar(id:any){
this.route.navigateByUrl('/cars/'+id)
this.ngOnDestroy()

}
}



