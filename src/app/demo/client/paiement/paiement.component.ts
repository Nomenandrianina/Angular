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
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [CommonModule, SharedModule,ReactiveFormsModule,NgxLoadingModule,Ng2SearchPipeModule],
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export default class PaiementComponent implements OnInit {
  detail: any;
  rep: any;
  public loading = false;
  message: any;
  filterTerm!: string;
  id_user = sessionStorage.getItem('id');

  constructor(private authService: AuthService, private receptionService: ReceptionService, private router: Router,private route: ActivatedRoute){
    this.authService.isClient();

  }

  ngOnInit(): void {
    this.getAllPaiement();
  }

  getAllPaiement(){
    this.loading = true;
    const data = {
      id : this.id_user
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.detail = response.paie;
      this.rep = response.reparation;
      console.log(this.rep);
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getAllpaiement(data).subscribe(onSuccess,onError);
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
