import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



const baseUrl = 'https://expressjs.cyclic.app/';
// const baseUrl = 'http://localhost:4000/';

const urlCreateCar = baseUrl + 'create_car';

@Injectable({
  providedIn: 'root'
})
export class BonEntreeService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  create(data){
    return this.http.post(urlCreateCar, data);
  }
}
