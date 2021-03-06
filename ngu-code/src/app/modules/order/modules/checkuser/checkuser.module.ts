import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckuserComponent } from './checkuser.component';

import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
@NgModule({
  imports: [
    CommonModule,

    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [CheckuserComponent]
})
export class CheckuserModule { }
