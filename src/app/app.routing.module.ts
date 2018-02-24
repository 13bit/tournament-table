import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {adminRoutes} from './admin/admin.routing.module';
import {mainRoutes} from './main/main.routing.module';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [],
    children: [
      ...adminRoutes,
      ...mainRoutes
    ],
  },
  {
    path: '**',
    redirectTo: '/'
  }
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
