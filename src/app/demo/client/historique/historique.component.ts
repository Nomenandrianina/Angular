import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';
import { ReceptionService } from 'src/app/services/reception.service';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, SharedModule, DragDropModule, Ng2SearchPipeModule,RouterModule,NgxLoadingModule],
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})

export default class HistoriqueComponent implements OnInit{
  public loading = false;
  list: any;
  message: any;
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
      console.log('reponse',this.list);
    };
    const onError = (response: any) => {
      this.message = response.message;
      this.loading = false;
    };
    this.receptionService.get_All_Car_User(data).subscribe(onSuccess,onError);
  }


  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    this.list.forEach((user, idx) => {
      user.order = idx + 1;
    });
  }

}
