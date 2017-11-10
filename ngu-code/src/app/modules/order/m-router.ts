import { Routes} from '@angular/router';
import { OrderComponent} from './order.component';
export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'uncheckuser',
      },
      {
        path: 'uncheckuser',
        pathMatch: 'full',
        loadChildren: 'app/modules/order/modules/uncheckuser/uncheckuser.module#UncheckuserModule'
      },
      {
        path: 'uncheckmsg',
        pathMatch: 'full',
        loadChildren: 'app/modules/order/modules/uncheckmsg/uncheckmsg.module#UncheckmsgModule'
      },
      {
        path: 'checkmsg',
        pathMatch: 'full',
        loadChildren: 'app/modules/order/modules/checkmsg/checkmsg.module#CheckmsgModule'
      },
      {
        path: 'checkuser',
        pathMatch: 'full',
        loadChildren: 'app/modules/order/modules/checkuser/checkuser.module#CheckuserModule'
      },
      {
        path: 'alarm',
        pathMatch: 'full',
        loadChildren: 'app/modules/order/modules/alarm/alarm.module#AlarmModule'
      }
    ]

  }
];
