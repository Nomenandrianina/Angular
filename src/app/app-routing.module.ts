import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/guest/login',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      },
      {
        path: 'home/client',
        loadComponent: () => import('./demo/client/home/home.component')
      },
      {
        path: 'liste_voiture',
        loadComponent: () => import('./demo/client/liste-voiture/liste-voiture.component')
      },
      {
        path: 'client/detail_reparation/:id',
        loadComponent: () => import('./demo/client/detail/detail.component')
      },
      {
        path: 'client/historique',
        loadComponent: () => import('./demo/client/historique/historique.component')
      },
      {
        path: 'client/historique/detail/:id',
        loadComponent: () => import('./demo/client/historepair/historepair.component')
      },
      {
        path: 'bon_entree',
        loadComponent: () => import('./demo/client/bon-entre/bon-entre.component')
      },
      {
        path: 'client/list/paiement',
        loadComponent: () => import('./demo/client/paiement/paiement.component')
      },
      {
        path: 'list_reparation/:id',
        loadComponent: () => import('./demo/client/reparation/reparation.component')
      },
      {
        path: 'facture/:id',
        loadComponent: () => import('./demo/client/facture/facture.component')
      },
      {
        path: 'atelier/reception',
        loadComponent: () => import('./demo/atelier/reception/reception.component')
      },
      {
        path: 'atelier/update/reparation',
        loadComponent: () => import('./demo/atelier/reparation/reparation.component')
      },
      {
        path: 'atelier/list_reparation',
        loadComponent: () => import('./demo/atelier/list-car/list-car.component')
      },
      {
        path: 'atelier/detail_reparation/:id',
        loadComponent: () => import('./demo/atelier/detail/detail.component')
      },
      {
        path: 'home/atelier',
        loadComponent: () => import('./demo/atelier/home/home.component')
      },
      {
        path: 'atelier/bon_de_sortie/:id',
        loadComponent: () => import('./demo/atelier/bonsortie/bonsortie.component')
      },
      {
        path: 'home/financier',
        loadComponent: () => import('./demo/financier/statistique/statistique.component')
      },
      {
        path: 'home/financier/pieces',
        loadComponent: () => import('./demo/financier/liste-piece/liste-piece.component')
      },
      {
        path: 'financier/nouveau_piece',
        loadComponent: () => import('./demo/financier/add-piece/add-piece.component')
      },
      {
        path: 'financier/paiement',
        loadComponent: () => import('./demo/financier/liste-paiement/liste-paiement.component')
      }
      
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
