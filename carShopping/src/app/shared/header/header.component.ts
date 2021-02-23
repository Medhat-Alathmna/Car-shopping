import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public url :string | undefined
  //total$: Observable<number>;

  constructor() { 
   // this.total$ = this.cartService.cart$.pipe(map(products => products.length)
   // );
  }

  ngOnInit(): void {

    
  }

 
  

}
