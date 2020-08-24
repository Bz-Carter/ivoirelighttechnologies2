import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import {MDBSpinningPreloader} from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  subscription: Subscription;

  constructor(private mdbSpinningPreloader: MDBSpinningPreloader, private router: Router){}

  ngOnInit(){

    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(() => window.scrollTo(0, 0));

    this.mdbSpinningPreloader.stop();
  }

 
}
