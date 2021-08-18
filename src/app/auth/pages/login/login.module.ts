import { NgModule } from '@angular/core';

import { LoginPage } from './login.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    SharedModule,
  LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
