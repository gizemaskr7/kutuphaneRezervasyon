import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { RezarvasyonlarimComponent } from './components/rezarvasyonlarim/rezarvasyonlarim.component';


const routes: Routes = [
  { path: '', component:AllComponent},
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "admin", component: AdminComponent },
  { path: "rez", component: RezarvasyonlarimComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
