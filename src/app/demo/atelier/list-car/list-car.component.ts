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
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgxLoadingModule } from 'ngx-loading';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-list-car',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,Ng2SearchPipeModule],
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export default class ListCarComponent implements OnInit{
  filterTerm: string;
  list: any;
  piece: any;
  message: any;
  closeResult: string;
  modalOptions:NgbModalOptions;
  addForm: FormGroup;
  rows: FormArray;
  idcar: any;
  public loading = false;

  constructor(private authService: AuthService, private receptionService: ReceptionService,private datePipe: DatePipe,private modalService: NgbModal,private fb: FormBuilder,){
    this.authService.isAtelier();
    this.datePipe = datePipe;
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop',
      size: 'lg',
      windowClass: 'modal-xl'
    }
    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);
  }

  ngOnInit(): void {
    this.getPieces();
    this.getCar();
  }

  open(content,id) {
    this.idcar = id;
    console.log(id);
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  close(){
    this.loading = true;
    const data = {
      Car: this.idcar,
      reparation:  this.rows.getRawValue()
    };
    console.log(data);
    this.modalService.dismissAll();
    const onSuccess = (response: any) => {
      if(response.status == 200){
        this.loading = false;
        window.location.reload();
      }
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.reparation(data).subscribe(onSuccess,onError);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getPieces(): void{
    this.loading = true;
    const onSuccess = (response: any) => {
      this.loading = false;
      this.piece = response.piece;
      console.log("All piece",this.piece);
    };
    const onError = (response: any) => {
      this.loading = false;
      this.message = response.message;
    };
    this.receptionService.getAllpiece().subscribe(onSuccess,onError);
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

  onAddRow() {
    this.rows.push(this.createItemFormGroup());
    this.addForm.get('items_value').setValue('yes');
    this.addForm.addControl('rows', this.rows);
  }

  onRemoveRow(rowIndex: number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      piece: null,
      description: null,
      quantite: null,
      statut: 'En cours',
    });
  }
}
