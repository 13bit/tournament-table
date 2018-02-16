import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {AdminRoutingModule} from './admin.routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';
import {UserResolve} from './user.resolver';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [MainComponent, EditUserComponent, UsersComponent],
  providers: [
    UserResolve,
  ]
})
export class AdminModule { }
