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
  feature=[]
  value = 'Clear me';
  model=new FormControl('', [Validators.required])
  uploadCard=new FormControl('', [Validators.required])
  uploadMain=new FormControl('', [Validators.required])
  uploadfeture=new FormControl('', [Validators.required])
  uploadhigh=new FormControl('', [Validators.required])
  price=new FormControl('', [Validators.required])
  abstarct=new FormControl('', [Validators.required])
  Used=new FormControl('', )
  
  constructor(private carSer:CarService,private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
     
      model: this.model,
      price: this.price,
      abstarct: this.abstarct,
      Used: this.Used,
      uploadCard:this.uploadCard,
      uploadMain:this.uploadMain,
      uploadhigh:this.uploadhigh,
      uploadfeture:this.uploadfeture
    })
    
  }


  saveProduct(car:Car){
    let savePro=this.form.value
    let data:Car={
      model:savePro.model,
      price:savePro.price,
      details:savePro.abstarct,
      onSale:savePro.Used
    }
    this.carSer.addCars(data).then(()=>{console.log(data);
      this.route.navigate(['./admin/carlist'])
    }
    )
    
  }
  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
}
