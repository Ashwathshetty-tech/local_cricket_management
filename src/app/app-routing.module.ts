import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventRegisterComponent } from './Events/event-register/event-register.component';
import { EventDetailsComponent } from './Events/event-details/event-details.component';





const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'eventDetails',component:EventDetailsComponent},
  {path:'eventRegister',component:EventRegisterComponent},
   { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
