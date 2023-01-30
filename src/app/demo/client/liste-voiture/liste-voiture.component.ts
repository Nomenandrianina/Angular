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
import {ProgressBarModule} from "angular-progress-bar";
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-liste-voiture',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule,Ng2SearchPipeModule],
  templateUrl: './liste-voiture.component.html',
  styleUrls: ['./liste-voiture.component.scss']
})
export default class ListeVoitureComponent implements OnInit {
  list: any;
  message: any;
  public loading = false;
  filterTerm!: string;

  constructor(private authService: AuthService, private receptionService: ReceptionService){
    this.authService.isClient();
  }

  ngOnInit(): void {
    this.getallCarUser();
  }

  getallCarUser(): void{
    this.loading = true;
    const data = {
      user: sessionStorage.getItem('id')
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.car;
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.get_All_Car_User(data).subscribe(onSuccess,onError);
  }
}
