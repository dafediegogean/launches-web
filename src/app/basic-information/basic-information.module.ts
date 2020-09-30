import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicInformationComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,

    BasicInformationRoutingModule
  ]
})
export class BasicInformationModule { }
