import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchesFormComponent } from './launches-form.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesFormComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LaunchesFormRoutingModule { }
