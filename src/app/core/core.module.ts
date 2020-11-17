import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/layouts/main/main.component';
import { NotFoundComponent } from './components/layouts/not-found/not-found.component';

import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class CoreModule { }
