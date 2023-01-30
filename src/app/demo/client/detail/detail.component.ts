import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceptionService } from 'src/app/services/reception.service';
import {DatePipe} from '@angular/common';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import {ProgressBarModule} from "angular-progress-bar";
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule,NgCircleProgressModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export default class DetailComponent {
  id = this.route.snapshot.paramMap.get('id');
  public loading = false;
  list: any;
  message: any;

  form = new FormGroup({
    id_rep: new FormControl(this.id),
    avancement: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService, private receptionService: ReceptionService,private router: Router,private route: ActivatedRoute){
    this.authService.isClient();
  }

  get id_rep(){return this.form.get('id_rep')}
  get avancement(){return this.form.get('avancement'); }

  ngOnInit(): void {
    this.getReparationById();
  }


  getReparationById(): void{
    this.loading = true;
    const data = {
      id: this.id
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
      console.log(this.list);
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getReparationById(data).subscribe(onSuccess,onError);

  }

}
