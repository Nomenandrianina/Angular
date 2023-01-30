import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,  FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-facture',
  standalone: true,
  imports: [CommonModule, SharedModule,ReactiveFormsModule,NgxLoadingModule],
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})

export default class FactureComponent implements OnInit {
  name: String;
  firstname: String;
  email: String;
  public loading = false;
  id = this.route.snapshot.paramMap.get('id');
  list: any;
  detail: any;
  message: any;
  total: Number;
  id_reparation = [];
  id_car: any;

  form = new FormGroup({
    id_user: new FormControl(sessionStorage.getItem('id')),
    datepaie:  new FormControl(null),
    etat:  new FormControl('Unpaid'),
    status: new FormControl('Envoye du paiement')
  });


  constructor(private authService: AuthService, private receptionService: ReceptionService, private router: Router,private route: ActivatedRoute){
    this.authService.isClient();
    this.name = sessionStorage.getItem('name');
    this.firstname = sessionStorage.getItem('firstname');
    this.email = sessionStorage.getItem('email');
  }

  get id_user(){return this.form.get('id_user')}
  get datepaie(){return this.form.get('datepaie'); }
  get etat(){return this.form.get('etat'); }
  get status(){return this.form.get('status'); }

  ngOnInit(): void {
    this.getFactureCarUser();
  }

  getFactureCarUser(): void{
    this.loading = true;
    const data = {
      id: this.id
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
      this.detail = response.car;
      console.log(this.list);
      this.id_car = this.detail._id;
      this.list.forEach(element => {
        this.id_reparation.push(element._id);
      });
      this.total = this.list.reduce((accumulator, obj) => {
        return accumulator + (obj.Piece.prix* obj.quantite) + obj.Piece.main_oeuvre;
      }, 0);
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.getFactureBycar(data).subscribe(onSuccess,onError);
  }

  checkStatus(data){
    var reponse = false;
    data.forEach(element => {
        if(element.status == 'Terminer'){
          console.log(true);
          reponse = true;
        }else{
          console.log(false);
          reponse = false;
        }
    });

    return reponse;
  }

  paiement(){
    this.loading = true;
    const onSuccess = (response: any) => {
      if (response.status === 200){
        this.loading = false;
        this.message = true;
        this.router.navigateByUrl('/client/list/paiement');
      }else{
        this.loading = false;
      }
    };
    const onError = (response: any) => {
      this.loading = false;
      this.form.reset();
    };
    const data = {
      User: this.form.value.id_user,
      Car: this.id_car,
      Reparation: this.id_reparation,
      datepaie: Date.now(),
      etat: this.form.value.etat,
      status: this.form.value.status
    };
    this.receptionService.SendPaiement(data).subscribe(onSuccess,onError);
  }

}
