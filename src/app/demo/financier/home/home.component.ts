import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export default class HomeComponent implements OnInit{
  constructor(private authService: AuthService){
    // this.authService.Check_Connected_financier();
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
