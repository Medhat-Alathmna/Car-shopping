import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/core/models/car.model';
import { CarService } from 'src/app/core/services/car.service';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  car!:Car
  form!: FormGroup;

 
  model=new FormControl('', [Validators.required])
  price=new FormControl('', [Validators.required])
  description=new FormControl('', [Validators.required])
  Used=new FormControl('', )
  
  constructor(private carSer:CarService,private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
     
      model: this.model,
      price: this.price,
      description: this.description,
      Used: this.Used,
    })
    
  }


  saveProduct(car:Car){
    let savePro=this.form.value
    let data:Car={
      model:savePro.model,
      price:savePro.price,
      description:savePro.description,
      used:savePro.Used
    }
    this.carSer.addCars(data).then(()=>{console.log(data);
      this.route.navigate(['./admin/carlist'])
    }
    )
    
  }
}
