import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './users/users.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {UserResolve} from './user.resolver';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [],
    children: [
      {
        path: 'main',
        component: MainComponent
      },
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
