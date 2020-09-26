import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    // this.redirect();
  }

  redirect() {
    setTimeout(function () {
      this.router.navigate(['/login']);
    }.bind(this), 3000);
  }

}
