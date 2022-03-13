import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
      path: 'citas',
      loadChildren: ()=> import('./citas/citas.module').then(m=>m.CitasModule)
    },
    {
      path: '**', 
      redirectTo:'inicio'
    }

   


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
