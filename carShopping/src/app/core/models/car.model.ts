import { Images } from "./images.model";

export interface Car {
    id?: string;
    model?: string;
    price?: number;
    description?: string;
    image?: any;
    onSale?:boolean;
    used?:boolean;

  }
