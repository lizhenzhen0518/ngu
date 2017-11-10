import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule} from './fun/services';
import { AppEffectsModule} from './fun/effects';
import { AppStoreModule} from './fun/reducers';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';
import { SearchComponent } from './search.component';
@NgModule({
  imports: [
    CommonModule,
    ServiceModule,
    AppEffectsModule,
    AppStoreModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
