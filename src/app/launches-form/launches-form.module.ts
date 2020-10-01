import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TextMaskModule } from 'angular2-text-mask';

import { LaunchesFormRoutingModule } from './launches-form-routing.module';
import { LaunchesFormComponent } from './launches-form.component';

@NgModule({
  declarations: [LaunchesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,

    TextMaskModule,

    LaunchesFormRoutingModule
  ]
})
export class LaunchesFormModule { }
