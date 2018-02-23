import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MainRoutingModule} from './main.routing.module';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, TableComponent, HeaderComponent]
})
export class MainModule { }
