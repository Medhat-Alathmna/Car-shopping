import {  Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  mySwiper!: Swiper;

  images: string[] = [
    'https://7wallpapers.net/wp-content/uploads/1_BMW-X6-wallpapers.jpeg',
    'https://www.bmw-saudiarabia.com/content/dam/bmw/common/all-models/m-series/x6m/2019/inspire/bmw-x6-m-inspire-sp-desktop.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1569992784039.jpg',
    'https://media.ed.edmunds-media.com/kia/optima/2020/oem/2020_kia_optima_sedan_sx_fq_oem_1_815.jpg',
  ];
  img1:string='https://7wallpapers.net/wp-content/uploads/1_BMW-X6-wallpapers.jpeg'
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
