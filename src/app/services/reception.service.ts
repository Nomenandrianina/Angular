import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



// const baseUrl = 'http://localhost:4000/';
const baseUrl = 'https://expressjs.cyclic.app/';


const urlgetCar = baseUrl + 'all_car';

const urlValideCar = baseUrl + 'valide_car';

const urlReparation = baseUrl + 'add_reparation';

const urlgetReparation = baseUrl + 'all_reparation';

const urlgetReparationById = baseUrl + 'reparation/id';

const urlUpdatereparation = baseUrl + 'update/avancement';

const urlTerminerReparation = baseUrl + 'terminer/reparation';

const urlGetReparationByIdCar = baseUrl + 'client/car/reparation';

const urlGetRepHistorique = baseUrl + 'client/historique';

const urlGetfacture= baseUrl + 'client/facture';

const urlGetlistCarUser = baseUrl + 'client/liste_voiture';

const paiement = baseUrl + 'client/paiement';

const urlgetAllpaiement = baseUrl + 'client/list/paiement';

const urlbonsortie = baseUrl + 'client/bon-sortie';

const urlgetPaiementFinancier = baseUrl + 'financier/list/paiement';

const urlGetAllpiece = baseUrl + 'financier/get_piece';

const urlValidePaie = baseUrl + 'financier/valide/paiement';




@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private http: HttpClient , private router: Router) {
    this.http = http;
    this.router = router;
  }

  getCar(){
    return this.http.get(urlgetCar);
  }

  valideCar(data){
    return this.http.post(urlValideCar,data);
  }

  reparation(data){
    return this.http.post(urlReparation,data);
  }

  getReparation(){
    return this.http.get(urlgetReparation);
  }

  getReparationById(data){
    return this.http.post(urlgetReparationById,data);
  }

  updateReparation(data){
    return this.http.post(urlUpdatereparation,data);
  }

  terminerReparation(data){
    return this.http.post(urlTerminerReparation,data);
  }

  getReparationbyIdCar(data){
    return this.http.post(urlGetReparationByIdCar,data);
  }
  getHistoriqueBycar(data){
    return this.http.post(urlGetRepHistorique,data);
  }

  getFactureBycar(data){
    return this.http.post(urlGetfacture,data);
  }

  getbonSortie(data){
    return this.http.post(urlbonsortie,data);
  }

  get_All_Car_User(data){
    return this.http.post(urlGetlistCarUser,data);
  }

  SendPaiement(data){
    return this.http.post(paiement,data);
  }

  getAllpaiement(data){
    return this.http.post(urlgetAllpaiement,data);
  }

  getAllpaiementFinancier(){
    return this.http.get(urlgetPaiementFinancier);
  }

  getAllpiece(){
    return this.http.get(urlGetAllpiece);
  }

  ValidePaiement(data){
    return this.http.post(urlValidePaie,data);
  }
}
