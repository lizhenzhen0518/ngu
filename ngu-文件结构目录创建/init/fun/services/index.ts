import { NgModule } from '@angular/core';
import { AuthGuardService} from './auth-guard.service';

export {
  AuthGuardService
}
@NgModule({
  imports: [],
  exports: [],
  providers: [
    AuthGuardService
  ]
})
export class ServiceModule { }
