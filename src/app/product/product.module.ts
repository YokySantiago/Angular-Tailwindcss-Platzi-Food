import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/list/product-list.component';
import { ProductDetailComponent } from './components/detail/product-detail.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
