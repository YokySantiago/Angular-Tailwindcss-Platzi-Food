import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/list/product-list.component';
import { ProductDetailComponent } from './components/detail/product-detail.component';
import { VerticalListComponent } from './components/vertical-list/product-vertical-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    VerticalListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    VerticalListComponent
  ]
})
export class ProductModule { }
