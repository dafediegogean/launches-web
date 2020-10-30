import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { MaskUtil } from './../shared/mask/mask.util';
import { BasicInformartionService } from './basic-informartion.service';

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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  newFormGroup: FormGroup;

  usdMask: any;

  index: number;
  months: Month[];
  isEditable = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private mask: MaskUtil,
    private basicInformationService: BasicInformartionService
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
    this.configForm();
  }

  next() {
    this.index = 1;
    this.snackBar.open(`Congratulations! Let's go to the next step`, null, {
      duration: 5000,
    });
  }

  create() {
    this.newFormGroup = this.formBuilder.group({
      firstName: this.firstFormGroup.get('firstName').value,
      secondName: this.firstFormGroup.get('secondName').value,
      month: this.firstFormGroup.get('month.value').value,
      day: this.firstFormGroup.get('day').value,
      year: this.firstFormGroup.get('year').value,
      grossValue: this.secondFormGroup.get('grossValue').value
    });
    this.basicInformationService.save(this.newFormGroup.value);
    this.redirect();
    this.snackBar.open(`Now here, this is where you will see the entire daily launch`, null, {
      duration: 5000,
    });
  }

  configForm() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      secondName: [null, Validators.required],
      month: this.formBuilder.group({
        value: [null, Validators.required]
      }),
      day: [null, Validators.required],
      year: [null, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      grossValue: [null, Validators.required]
    })
  }

  redirect() {
    this.router.navigate(['/launches-form']);
  }

}
