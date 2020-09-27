import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicInformationComponent } from './basic-information.component';

const routes: Routes = [
  {
    path: '',
    component: BasicInformationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicInformationRoutingModule { }
