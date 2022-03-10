import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errores/pages/error404/error404.component';
import { IndexComponent } from './index/pages/index/index.component';
import { ServiciosComponent } from './index/pages/servicios/servicios.component';
import { LoginComponent } from './logeo/pages/login/login.component';
import { RegisterComponent } from './logeo/pages/register/register.component';

const routes: Routes = [  
    {path:'', redirectTo: 'inicio', pathMatch:'full'},
    {path:'inicio',component: IndexComponent},
    {path:'login', component: LoginComponent},
    {path:'servicios', component:ServiciosComponent},
    {path:'registrarse', component:RegisterComponent},
    

//errores
    {path:'**', component: Error404Component }
    
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
