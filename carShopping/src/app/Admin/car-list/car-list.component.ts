import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit ,AfterViewInit {
  Cars:Car[]=[
   
  ]


  // displayedColumns: string[] = [ 'model', 'price', 'actions'];
  constructor(
    private carSer:CarService
  ) { }

  displayedColumns: string[] = [ 'model', 'price', 'actions'];
  dataSource = new MatTableDataSource(this.Cars);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {



   
  }
  ngAfterViewInit(): void{
    this.getCar()

  }
  deleteCar(id:number){

  }
getCar(){
    this.Cars=this.carSer.getCars()
 
    


}
  

  
}
