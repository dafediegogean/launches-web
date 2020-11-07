import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchesFormService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/v1/launche');
  }
}
