import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ChartsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
