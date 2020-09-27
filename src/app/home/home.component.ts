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
    setTimeout(function () {
      this.router.navigate(['/login']);
    }.bind(this), 3000);
  }

  showProgressSpinner = () => {
    this.displayProgressSpinner = true;
    setTimeout(() => {
      this.displayProgressSpinner = false;
    }, 3000);
  };

}
