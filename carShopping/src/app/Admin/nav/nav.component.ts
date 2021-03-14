import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor( private breakpointObserver: BreakpointObserver,private c : CarService, private route : Router) { }

  ngOnInit(): void {
    this.c.cuurentRouter.next(this.route.url)
  }
routetoHOME(){
  this.route.navigateByUrl('/home')
  setTimeout(() => {
    location.reload();

  }, 200);

}
}
