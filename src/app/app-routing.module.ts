import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'basic-information',loadChildren:() => 
    import('./basic-information/basic-information.module').then(m => m.BasicInformationModule)
  },
  { path: 'launches-form', loadChildren:() => 
    import('./launches-form/launches-form.module').then(m => m.LaunchesFormModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
