import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { TextMaskModule } from 'angular2-text-mask';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { MaskUtil } from './../shared/mask/mask.util';

@NgModule({
  declarations: [BasicInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    TextMaskModule,

    BasicInformationRoutingModule
  ],
  providers: [MaskUtil]
})
export class BasicInformationModule { }
