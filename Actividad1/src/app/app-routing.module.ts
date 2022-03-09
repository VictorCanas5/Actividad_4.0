import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/pages/index/index.component';
import { LoginComponent } from './logeo/pages/login/login.component';
import { RegisterComponent } from './logeo/pages/register/register.component';

const routes: Routes = [  
    {path:'', redirectTo: 'inicio', pathMatch:'full'},
    {path:'inicio',component: IndexComponent},
    {path:'login', component: LoginComponent},
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
