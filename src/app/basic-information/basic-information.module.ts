import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { TextMaskModule } from 'angular2-text-mask';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';
import { MaskUtil } from './../shared/mask/mask.util';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BasicInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatSnackBarModule,
    TextMaskModule,

    BasicInformationRoutingModule
  ],
  providers: [MaskUtil]
})
export class BasicInformationModule { }
