import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'
import { ChartsComponent } from './charts/charts.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent}, 
  { path: 'profileResult', component: ChartsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
