import { Component, OnInit } from '@angular/core';
import { FinancerService } from 'src/app/services/financer.service';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormGroup,  FormControl , FormArray , FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceptionService } from 'src/app/services/reception.service';
import {DatePipe} from '@angular/common';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-liste-piece',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,Ng2SearchPipeModule],
  
  templateUrl: './liste-piece.component.html',
  styleUrls: ['./liste-piece.component.scss']
})
export default class ListePieceComponent implements OnInit{
  list: any;
  public loading = false;
  message_delete:boolean=false;
  filterTerm: string;
  main_oeuvre:"main d'oeuvre"
  constructor(private financierservice: FinancerService,private router: Router){
    // this.financierservice.Check_Connected_financier();
  }
  ngOnInit(): void {
    this.getallpieces()
  }

  getallpieces(): void{
    this.loading = true;
    const onSuccess = (response: any) => {
      this.loading = false;
      this.list = response.piece;
    };
    const onError = (response: any) => {
      this.loading = false;
    };
    this.financierservice.getAllPiece().subscribe(onSuccess,onError);
  }

  Add_new_piece():void{
    this.loading = true;
    this.loading = false;
    this.router.navigate(['/financier/nouveau_piece']);
  }

  Delete_piece(id):void{
    this.loading = true;
    
    const onSuccess = (response: any) => {
      this.loading = false;
      this.show_message_success();
      this.list=response.piece;
    };

    const onError = (response: any) => {
      this.loading = false;
    };

    const data = {
      id: id
    };
    this.financierservice.delete_piece(data).subscribe(onSuccess,onError);
  }

  show_message_success(){
    this.message_delete=true;
    setTimeout(()=>{  
      this.message_delete = false;
    }, 4000);
  }
  
  removeMessage(){
    this.message_delete = false;
  }
  
}
