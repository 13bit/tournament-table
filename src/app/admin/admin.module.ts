import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {AdminRoutingModule} from './admin.routing.module';
import {EditUserComponent} from './edit-user/edit-user.component';
import {UsersComponent} from './users/users.component';
import {UserResolve} from './user.resolver';
import {FormsModule} from '@angular/forms';
import {BonusSettingsComponent} from './bonus-settings/bonus-settings.component';
import {NgDatepickerModule} from 'ng2-datepicker';
import {BsDatepickerModule, TimepickerModule} from 'ngx-bootstrap';
import {SettingsComponent} from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgDatepickerModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot()

  ],
  declarations: [MainComponent, EditUserComponent, UsersComponent, BonusSettingsComponent, SettingsComponent],
  providers: [
    UserResolve,
  ]
})
export class AdminModule {
}
