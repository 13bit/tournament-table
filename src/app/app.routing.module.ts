import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {adminRoutes} from './admin/admin.routing.module';

export const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'app',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    canActivate: [],
    children: [
      ...adminRoutes
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: 'app'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
