import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Routing
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';

// Children Routes
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

//Home
//Contact
//About
//Redirects to HOME
//Page Not Found
const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "courses",
    component: CoursesComponent,
  },
  {
    path: "courses/:course",
    component: CoursesDetailComponent
  },
  {
    path: "contact",
    component: ContactComponent,
    children: [
      {
        path: "",
        component: ContactInfoComponent
      },
      {
        path: "details",
        component: ContactDetailsComponent
      },
    ]
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path:"",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    CoursesComponent,
    CoursesDetailComponent,
    ContactInfoComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
