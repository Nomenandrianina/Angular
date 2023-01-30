import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup,  FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-registerclient',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,NgxLoadingModule],
  templateUrl: './registerclient.component.html',
  styleUrls: ['./registerclient.component.scss']
})
export default class RegisterclientComponent {
  message: any;
  public loading = false;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  registerform = new FormGroup({
    name:  new FormControl(null, [ Validators.required]),
    firstname:  new FormControl(null, [ Validators.required]),
    email:  new FormControl(null, [ Validators.required, Validators.email]),
    password:  new FormControl(null, [ Validators.required]),
  });

  Inscription(){
    this.loading = true;
    const onSuccess = (response: any) => {
      localStorage.setItem('token', response);
      this.loading = false;
      this.router.navigateByUrl('/guest/login/client');
    };

    const onError = (response: any) => {
      this.loading = false;
      this.message=response.error.error;
      this.registerform.reset();
    };

    const data = {
      name: this.registerform.value.name,
      firstname: this.registerform.value.firstname,
      email: this.registerform.value.email,
      password: this.registerform.value.password,
      photo: "photo",
      role: "Client"
    };

    this.authService.Inscription(data).subscribe(onSuccess,onError);
  }
}
