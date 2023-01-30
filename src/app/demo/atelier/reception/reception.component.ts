import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceptionService } from 'src/app/services/reception.service';
import {DatePipe} from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-reception',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule, NgxLoadingModule,Ng2SearchPipeModule],
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export default class ReceptionComponent implements OnInit {

  list: any;
  message: any;
  public loading = false;
  filterTerm: string;

  constructor(private authService: AuthService, private receptionService: ReceptionService,private datePipe: DatePipe){
    this.authService.isAtelier();
    this.datePipe = datePipe;
  }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(): void{
    this.loading = true;
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.car;
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getCar().subscribe(onSuccess,onError);
  }

  valideEnter(id_car){
    this.loading = true;
    const data = {
      id: id_car
    };
    const onSuccess = (response: any) => {
      if(response.status == 200){
        this.loading = false;
        this.message = "Le " + response.car.marque + " " + response.car.type + " est bien reçu" ;
        window.location.reload();
      }
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.valideCar(data).subscribe(onSuccess,onError);
  }

  removeMessage(){
    this.message = null;
    window.location.reload();
  }
}
