import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [

  {
    path: '',
    children:[
      {path:'login', component: LoginComponent, canActivate:[AuthGuardGuard]},
      {path:'registrarse', component:RegisterComponent},
      {path: '**',redirectTo: 'login'},
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogeoRoutingModule { }
