import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {AdminModule} from './admin/admin.module';
import {RouterModule} from '@angular/router';
import {LocalStorageModule} from 'angular-2-local-storage';
import {UserService} from './UserService';
import {TimepickerModule} from 'ngx-bootstrap';
import {BonusSettingsService} from './BonusSettingsService';
import {MainModule} from './main/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MainModule,
    RouterModule.forRoot([], {useHash: true}),
    LocalStorageModule.withConfig({
      prefix: '',
      storageType: 'localStorage'
    }),
    TimepickerModule.forRoot()
  ],
  providers: [
    UserService,
    BonusSettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
