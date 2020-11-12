import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ProductModule } from '../product/product.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductModule,
    ContactModule
  ]
})
export class HomeModule { }
