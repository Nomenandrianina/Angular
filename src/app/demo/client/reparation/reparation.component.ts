  import { Component, OnInit } from '@angular/core';
  import { AuthService } from 'src/app/services/auth.service';
  import { RouterModule } from '@angular/router';
  import { CommonModule } from '@angular/common';
  import { SharedModule } from 'src/app/theme/shared/shared.module';
  import { ActivatedRoute, Router } from '@angular/router';
  import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
  import { Validators } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms';
  import { ReceptionService } from 'src/app/services/reception.service';
  import {DatePipe} from '@angular/common';
  import { NgxLoadingModule } from 'ngx-loading';
  import {ProgressBarModule} from "angular-progress-bar";
  import { Ng2SearchPipeModule } from 'ng2-search-filter';



@Component({
  selector: 'app-reparation',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,ProgressBarModule,Ng2SearchPipeModule],
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.scss']
})
export default class ReparationComponent implements OnInit {
  list: any;
  id = this.route.snapshot.paramMap.get('id');
  message: any;
  public loading = false;
  filterTerm!: string;



  constructor(private authService: AuthService, private router: Router,private route: ActivatedRoute,private receptionService: ReceptionService){
    this.authService.isClient();
  }

  ngOnInit(): void {
    this.getReparationByIdCar();
  }

  getReparationByIdCar(): void{
    this.loading = true;
    const data = {
      user: sessionStorage.getItem('id'),
      id: this.id
    };
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.reparation;
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.getReparationbyIdCar(data).subscribe(onSuccess,onError);
  }
}
