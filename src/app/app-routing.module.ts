// list angular imports where
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// list the components which will bet routed here
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//for each component page add the path, component, and pageTitle
const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent, data: {pageTitle: "Card Example"} },
  { path: 'second-page', component: SecondPageComponent, data: {pageTitle: 'Nested Menu, Child of Child Example'}  },
  { path: 'third-page', component: ThirdPageComponent, data: {pageTitle: 'Expansion Menu, Child Example'}  },

  // add new pages for the router above this comment line.
  // the empty path should always list as 2nd to last path.
  // In quizkie route to home page. Here using root.
  { path: '', redirectTo: '/first-page', pathMatch: 'full'},
  // Wild card route is always listed last and used when page is not found.
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes
      // for debugging uncomment the following line.
      //{ enableTracing: true }
      )
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
