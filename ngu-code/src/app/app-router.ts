import { Routes} from '@angular/router';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: 'app/modules/search/search.module#SearchModule'
  },
  {
    path: 'order',
    loadChildren: 'app/modules/order/order.module#OrderModule'
  }

];


