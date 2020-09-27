import { Component, OnInit } from '@angular/core';


interface Month {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  months: Month[];

  constructor() { }

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
  }

}
