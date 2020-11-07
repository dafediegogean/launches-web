import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface BasicInformation {
  firstName: string;
  secondName: string;
  month: string;
  day: string;
  year: string;
  grossValue: string
}

@Injectable({
  providedIn: 'root'
})
export class BasicInformartionService {

  constructor(private http: HttpClient) { }

  save(basicInformation: BasicInformation) {
    this.http.post<BasicInformation>(
      'http://localhost:8080/v1/basic-information/create', basicInformation)
        .toPromise();
  }
}
