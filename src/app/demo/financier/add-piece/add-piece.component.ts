import { Component, OnInit } from '@angular/core';
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
import { FinancerService } from 'src/app/services/financer.service';
@Component({
  selector: 'app-add-piece',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ReactiveFormsModule,NgxLoadingModule,Ng2SearchPipeModule],
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.scss']
})
export default class AddPieceComponent implements OnInit{
  imageSrc: String = '../../../../assets/images/photo_icon.png';
  public loading = false;
  list_erreur:any;
  photo_required:string;
  piece_name_required:string;
  prix_required:string;
  main_oeuvre_required:string;
  message: boolean=false;


  form = new FormGroup({
    photo: new FormControl(null, [Validators.required]),
    piece_name:  new FormControl(null, [ Validators.required]),
    prix:  new FormControl(null, [ Validators.required]),
    main_oeuvre: new FormControl(null, [ Validators.required]),
  });

  constructor(private financierservice:FinancerService){}

  ngOnInit(): void {
    // if(this.list_erreur!=undefined){
    //     console.log('ohoto',this.list_erreur.photo);
        
    // }
    console.log('all_errier',this.list_erreur);
  }

  onChange(event){
    const reader = new FileReader();
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      this.form.patchValue({
        photo: reader.result
      });
    };
  }

  show_message_success(){
    this.message=true;
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.message = false;
    }, 4000);
  }

  removeMessage(){
    this.message = false;
  }

  onSubmit(){
    this.loading = true;
    const onSuccess = (response: any) => {
      if (response.status === 200){
        this.loading = false;
        this.show_message_success();
        this.imageSrc = '../../../../assets/images/add-icon.svg';
        this.form.reset();
      }else{
        this.loading = false;
      }
    };

    const onError = (response: any) => {
      this.list_erreur=response.error.error.errors;
      this.photo_required=this.list_erreur.photo;
      this.piece_name_required=this.list_erreur.piece_name;
      this.prix_required=this.list_erreur.prix;
      this.main_oeuvre_required=this.list_erreur.main_oeuvre;
      this.loading = false;
      // this.form.reset();
    };

    const data = {
      photo: this.form.value.photo,
      piece_name: this.form.value.piece_name,
      prix: this.form.value.prix,
      main_oeuvre: this.form.value.main_oeuvre
    };
    this.financierservice.add_piece(data).subscribe(onSuccess,onError);
  }

}
