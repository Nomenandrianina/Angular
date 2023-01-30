import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import {ProgressBarModule} from "angular-progress-bar";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-historepair',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule,Ng2SearchPipeModule],
  templateUrl: './historepair.component.html',
  styleUrls: ['./historepair.component.scss']
})
export default class HistorepairComponent {
  list: any;
  car: any;
  id = this.route.snapshot.paramMap.get('id');
  message: any;
  public loading = false;
  filterTerm!: string;

  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute,private receptionService: ReceptionService){
    this.authService.isClient();
  }

  ngOnInit(): void {
    this.getCarUser();
  }

  getCarUser(): void{
    this.loading = true;
    const data = {
      user: sessionStorage.getItem('id'),
      id: this.id
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
      this.car = response.car;
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.getHistoriqueBycar(data).subscribe(onSuccess,onError);
  }

  calculateDiff(sentDate) {
    const unite = [" jours"," heures"," minutes"]
    var date1:any = new Date(sentDate);
    var date2:any = new Date();
    var ret = '';

    var diffDays:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    var diffHours:any = Math.floor(Math.abs(date1 - date2) / 3600000);
    var diffMinutes:any = Math.floor((date2 - date1) / (60 * 1000));

    if(diffDays < 1 && diffHours < 1 && diffMinutes >= 1){
      ret = diffMinutes + unite[2];
    }
    if(diffDays < 1 && diffHours >= 1 && diffMinutes >= 1){
      ret = diffHours + unite[1];
    }
    if(diffDays >= 1 && diffHours >= 1 && diffMinutes >= 1){
      ret = diffDays + unite[0]
    }

    return ret;
}
}
