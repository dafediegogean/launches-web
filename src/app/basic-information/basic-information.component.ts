import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MaskUtil } from './../shared/mask/mask.util';

interface Month {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss'],
  providers: [
    { provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false, showError: true } }
  ]
})
export class BasicInformationComponent implements OnInit {

  @ViewChild('stepper', {static: false})
  stepper: MatStepper;

  formGroup: FormGroup;

  usdMask: any;

  index: number;
  months: Month[];
  isEditable = false;

  constructor(
    private mask: MaskUtil
  ) {
    this.usdMask = this.mask.usdMask;
  }

  ngOnInit() {
    this.months = [
      { value: 1, viewValue: 'january' },
      { value: 2, viewValue: ' february' },
      { value: 3, viewValue:'march' },
      { value: 4, viewValue: 'april' },
      { value: 5, viewValue: 'may' },
      { value: 6, viewValue: 'june' },
      { value: 7, viewValue: 'july' },
      { value: 8, viewValue:'august' },
      { value: 9, viewValue: 'september' },
      { value: 10, viewValue: 'october' },
      { value: 11, viewValue: 'november' },
      { value: 12, viewValue: 'december' }
    ];
    this.index = 0;
  }

  next() {
    this.index = 1;
  }

}
