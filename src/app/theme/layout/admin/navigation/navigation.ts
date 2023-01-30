import { Injectable } from '@angular/core';

export interface NavigationItem {
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

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'etat de paiement',
        title: 'Accueil',
        type: 'item',
        classes: 'nav-item',
        url: '/home/financier',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'pices',
        title: 'Pièces',
        type: 'item',
        classes: 'nav-item',
        url: '/home/financier/pieces',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'paiement',
        title: 'Paiement',
        type: 'item',
        classes: 'nav-item',
        url: '/financier/paiement',
        icon: 'ti ti-vocabulary'
      }
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Objets',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'etat de paiement',
  //       title: 'Pièces',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/home/financier/pieces',
  //       icon: 'ti ti-vocabulary'
  //     },
  //     {
  //       id: 'paiement',
  //       title: 'Paiement',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/financier/paiement',
  //       icon: 'ti ti-vocabulary'
  //     },
  //     {
  //       id: 'paiement',
  //       title: 'Statitique',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/financier/statistique',
  //       icon: 'ti ti-vocabulary'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
