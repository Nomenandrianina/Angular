import { Injectable } from '@angular/core';

export interface NavigationAtelierItem {
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

export interface Navigation extends NavigationAtelierItem {
  children?: NavigationAtelierItem[];
}
const NavigationAtelierItems = [
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
        url: '/home/atelier',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'reception',
        title: 'Reçevoir les voitures',
        type: 'item',
        url: 'atelier/reception',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'reparation',
        title: 'Listes des voitures',
        type: 'item',
        classes: 'nav-item',
        url: '/atelier/list_reparation',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'reparation',
        title: 'Listes des réparations',
        type: 'item',
        classes: 'nav-item',
        url: 'atelier/update/reparation',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'sortie',
        title: 'Bon de sortie',
        type: 'item',
        classes: 'nav-item',
        url: 'atelier/bon_sortie',
        icon: 'ti ti-vocabulary'
      }

    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'reception',
  //       title: 'Reçevoir les voitures',
  //       type: 'item',
  //       url: 'atelier/reception',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'reparation',
  //       title: 'Listes des voitures',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/atelier/list_reparation',
  //       icon: 'ti ti-vocabulary'
  //     },
  //     {
  //       id: 'reparation',
  //       title: 'Listes des réparations',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'atelier/update/reparation',
  //       icon: 'ti ti-vocabulary'
  //     },
  //     {
  //       id: 'sortie',
  //       title: 'Bon de sortie',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'atelier/bon_sortie',
  //       icon: 'ti ti-vocabulary'
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationAtelierItem {
  get() {
    return NavigationAtelierItems;
  }
}
