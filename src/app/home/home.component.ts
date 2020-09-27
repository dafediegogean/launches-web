import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() color?: ThemePalette;
  @Input() diameter?: number = 100;
  @Input() mode?: ProgressSpinnerMode;
  @Input() strokeWidth?: number;
  @Input() value?: number;
  
  displayProgressSpinner: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.value = 10;
    this.mode = 'indeterminate';
    this.diameter = 40;
    // this.redirect();
    this.showProgressSpinner();
  }

  redirect() {
    this.router.navigate(['/basic-information']);
  }

  showProgressSpinner = () => {
    this.displayProgressSpinner = true;
    setTimeout(() => {
      this.redirect();
      this.displayProgressSpinner = false;
    }, 3000);
  };

}
