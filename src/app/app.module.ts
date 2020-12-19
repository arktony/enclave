import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TopperComponent } from './topper/topper.component';
import { FooterComponent } from './footer/footer.component';
import { LandingHeadComponent } from './landing-head/landing-head.component';
import { LandingmainComponent } from './landingmain/landingmain.component';
import { SidelogComponent } from './sidelog/sidelog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    TopperComponent,
    FooterComponent,
    LandingHeadComponent,
    LandingmainComponent,
    SidelogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
