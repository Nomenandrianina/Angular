import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { NgxLoadingModule } from 'ngx-loading';
import {ProgressBarModule} from "angular-progress-bar";





@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule],
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export default class ReparationComponent implements OnInit {

  public loading = false;
  list: any;
  message: any;


  constructor(private authService: AuthService, private receptionService: ReceptionService){
    this.authService.isAtelier();
  }

  ngOnInit(): void {
    this.getReparation();
  }



  getReparation(): void{
    this.loading = true;

    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
      console.log(this.list);
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getReparation().subscribe(onSuccess,onError);
  }
}
