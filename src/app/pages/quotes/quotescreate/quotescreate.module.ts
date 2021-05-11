import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotescreateRoutingModule } from './quotescreate-routing.module';
import { QuotescreateComponent } from './quotescreate.component';


@NgModule({
  declarations: [
    QuotescreateComponent
  ],
  imports: [
    CommonModule,
    QuotescreateRoutingModule
  ]
})
export class QuotescreateModule { }
