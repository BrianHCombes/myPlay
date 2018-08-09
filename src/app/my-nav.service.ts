import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyNavService {
  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  pageTitle:string = "Welcome to Quizki";

  setPageTitle(newPageTitle) {
    this.pageTitle = newPageTitle;
    console.log("my-nav.service.ts in setPageTitle: " + this.pageTitle);
  };

  getPageTitle() {
  //  this.pageTitle = this._activatedRoute.snapshot.data['pageTitle'];
    console.log("my-nav.service.ts in getPageTitle: " + this.pageTitle);
    return this.pageTitle;
  };

}
