import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';

@NgModule({
  declarations: [BasicInformationComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,

    BasicInformationRoutingModule
  ]
})
export class BasicInformationModule { }
