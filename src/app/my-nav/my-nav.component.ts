// my-nav component provides the menu, sidebar, and header

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

import { MyNavService } from './../my-nav.service';


@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  navigationEnd: Observable<NavigationEnd>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private myNavService: MyNavService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      // Create an Observable NavigationEnd event
      this.navigationEnd = this.router.events.pipe(
        filter((navigationEndEvent) => navigationEndEvent instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      ) as Observable<NavigationEnd>;
    }

    ngOnInit() {
      this.navigationEnd.subscribe(navigationEndEvent => this.myNavService.setPageTitle(navigationEndEvent['pageTitle']));
    }

  }
