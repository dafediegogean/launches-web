import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesFormRoutingModule } from './launches-form-routing.module';
import { LaunchesFormComponent } from './launches-form.component';

@NgModule({
  declarations: [LaunchesFormComponent],
  imports: [
    CommonModule,
    LaunchesFormRoutingModule
  ]
})
export class LaunchesFormModule { }
