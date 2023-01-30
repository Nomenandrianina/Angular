import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component')
      },
      {
        path: 'login/client',
        loadComponent: () => import('./loginclient/loginclient.component')
      },
      {
        path: 'admin/register',
        loadComponent: () => import('./register/register.component')
      },
      {
        path: 'client/register',
        loadComponent: () => import('./registerclient/registerclient.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
