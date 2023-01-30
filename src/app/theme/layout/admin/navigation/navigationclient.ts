import { Injectable } from '@angular/core';

export interface NavigationClientItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationClientItem {
  children?: NavigationClientItem[];
}
const NavigationclientItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'acceuil',
        title: 'Acceuil',
        type: 'item',
        classes: 'nav-item',
        url: '/home/client',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'paper',
    title: 'Paper',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'bon',
        title: 'Dépôt voiture',
        type: 'item',
        url: '/bon_entree',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'reparation',
        title: 'Liste voiture',
        type: 'item',
        classes: 'nav-item',
        url: '/liste_voiture',
        icon: 'ti ti-vocabulary'
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'etat de paiement',
        title: 'Paiement',
        type: 'item',
        classes: 'nav-item',
        url: '/client/list/paiement',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'historique',
        title: 'Historique',
        type: 'item',
        classes: 'nav-item',
        url: '/client/historique',
        icon: 'ti ti-vocabulary'
      }
    ]
  }
];

@Injectable()
export class NavigationClientItem {
  get() {
    return NavigationclientItems;
  }
}
