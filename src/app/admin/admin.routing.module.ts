import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {UserResolve} from './user.resolver';
import {BonusSettingsComponent} from './bonus-settings/bonus-settings.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [],
    component: MainComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'users/:id',
        component: EditUserComponent,
        resolve: {
          user: UserResolve
        }
      },
      {
        path: 'users/new',
        component: EditUserComponent
      },
      {
        path: 'bonus',
        component: BonusSettingsComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
