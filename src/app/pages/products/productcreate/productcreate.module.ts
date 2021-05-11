import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductcreateRoutingModule } from './productcreate-routing.module';
import { ProductcreateComponent } from './productcreate.component';


@NgModule({
  declarations: [
    ProductcreateComponent
  ],
  imports: [
    CommonModule,
    ProductcreateRoutingModule
  ]
})
export class ProductcreateModule { }
