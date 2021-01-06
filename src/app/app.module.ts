import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TopperComponent } from './topper/topper.component';
import { FooterComponent } from './footer/footer.component';
import { LandingHeadComponent } from './landing-head/landing-head.component';
import { LandingmainComponent } from './landingmain/landingmain.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeadComponent } from './dashboard-head/dashboard-head.component';
import { AuthGuard } from './services/auth-gaurd.service';
import { SideListingComponent } from './side-listing/side-listing.component';
import { CourseListingComponent } from './course-listing/course-listing.component';
import { CoursePageComponent } from './course-page/course-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopperComponent,
    FooterComponent,
    LandingHeadComponent,
    LandingmainComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHeadComponent,
    SideListingComponent,
    CourseListingComponent,
    CoursePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
