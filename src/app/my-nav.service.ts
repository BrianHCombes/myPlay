import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyNavService {

  private pageTitle: string;

  constructor(){
    this.pageTitle = "Welcome To Quizki"
  }


  setPageTitle(newPageTitle: string) {
    document.getElementById('spanPageTitle').innerHTML = this.pageTitle = newPageTitle;
  }

  getPageTitle() {
    return this.pageTitle;
  }

}
