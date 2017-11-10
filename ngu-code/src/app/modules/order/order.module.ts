import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';
import { OrderComponent } from './order.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [OrderComponent, HeaderComponent]
})
export class OrderModule { }
