import { Details } from "./details.model";
import { Images } from "./images.model";

export class Car {
    id?: string;
    model?: string;
    price?: number;
    details?: Details;
    image?: Images;
    onSale?:boolean;
    
    
    
  }
  
