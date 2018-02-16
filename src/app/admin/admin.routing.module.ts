import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main/main.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [],
    children: [
      {
        path: 'main',
        component: MainComponent
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
