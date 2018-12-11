import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterChefPage } from './register-chef';

@NgModule({
  declarations: [
    RegisterChefPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterChefPage),
  ],
})
export class RegisterChefPageModule {}
