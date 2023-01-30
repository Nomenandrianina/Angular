import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseUrl = 'https://expressjs.cyclic.app/';
// const baseUrl = 'http://localhost:4000/';

const urlAddPiece = baseUrl + 'financier/add_piece';
const urlGetAllPiece = baseUrl + 'financier/get_piece';
const urlDeletePiece = baseUrl + 'financier/delete_piece';
const urlmoyenne = baseUrl + 'financier/moyenne_reparation';


@Injectable({
  providedIn: 'root'
})
export class FinancerService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  add_piece(data){
    return this.http.post(urlAddPiece, data);
  }

  delete_piece(data){
    return this.http.post(urlDeletePiece, data);
  }

  getAllPiece(){
    return this.http.get(urlGetAllPiece);
  }

  getMoyennetemps(){
    return this.http.get(urlmoyenne);
  }

}
