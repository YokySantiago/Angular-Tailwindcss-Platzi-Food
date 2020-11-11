import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ProductModule } from '../product/product.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProductModule
  ]
})
export class HomeModule { }
