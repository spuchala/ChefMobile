import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChefCommentPage } from './chef-comment';

@NgModule({
  declarations: [
    ChefCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(ChefCommentPage),
  ],
})
export class ChefCommentPageModule {}
