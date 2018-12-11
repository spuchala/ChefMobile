import { NgModule } from '@angular/core';
import { RegisterUserComponent } from './register-user/register-user';
import { SearchComponent } from './search/search';
import { ChefPreferencesComponent } from './chef-preferences/chef-preferences';
import { ChefSpecialitiesComponent } from './chef-specialities/chef-specialities';
import { ChefCommentsComponent } from './chef-comments/chef-comments';
import { ChefMenuComponent } from './chef-menu/chef-menu';
import { BatchOrdersComponent } from './batch-orders/batch-orders';
import { ConverseComponent } from './converse/converse';
import { ChefComponent } from './chef/chef';
import { ChefReviewsComponent } from './chef-reviews/chef-reviews';
import { OrderComponent } from './order/order';
import { UtilsComponent } from './utils/utils';
import { AddressComponent } from './address/address';
import { CartComponent } from './cart/cart';
import { AddChefSpecialityComponent } from './add-chef-speciality/add-chef-speciality';
import { AddChefMenuComponent } from './add-chef-menu/add-chef-menu';
import { AddChefCommentComponent } from './add-chef-comment/add-chef-comment';
@NgModule({
	declarations: [RegisterUserComponent,
    SearchComponent,
    ChefPreferencesComponent,
    ChefSpecialitiesComponent,
    ChefCommentsComponent,
    ChefMenuComponent,
    BatchOrdersComponent,
    ConverseComponent,
    ChefComponent,
    ChefReviewsComponent,
    OrderComponent,
    UtilsComponent,
    AddressComponent,
    CartComponent,
    AddChefSpecialityComponent,
    AddChefMenuComponent,
    ChefCommentsComponent,
    AddChefCommentComponent,
    ConverseComponent],
	imports: [],
	exports: [RegisterUserComponent,
    SearchComponent,
    ChefPreferencesComponent,
    ChefSpecialitiesComponent,
    ChefCommentsComponent,
    ChefMenuComponent,
    BatchOrdersComponent,
    ConverseComponent,
    ChefComponent,
    ChefReviewsComponent,
    OrderComponent,
    UtilsComponent,
    AddressComponent,
    CartComponent,
    AddChefSpecialityComponent,
    AddChefMenuComponent,
    ChefCommentsComponent,
    AddChefCommentComponent,
    ConverseComponent]
})
export class ComponentsModule {}
