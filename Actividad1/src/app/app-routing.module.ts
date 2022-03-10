import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogeoModule } from './logeo/logeo.module';


const routes: Routes = [ 
   
                    //------------lazyload-------------

    //index
    {
      path: 'inicio',
      loadChildren: ()=> import('./index/index.module').then( m=> m.IndexModule )
    },
    {
      path: 'acceder',
      loadChildren: ()=> import('./logeo/logeo.module').then( m=> m.LogeoModule )
    },
    {
      path: '**', redirectTo:'inicio'
    }

   


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LogeoModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
