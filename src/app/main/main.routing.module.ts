import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';

export const mainRoutes: Routes = [
  {
    path: 'main',
    canActivate: [],
    component: MainComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
