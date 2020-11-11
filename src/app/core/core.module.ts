import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductService } from './services/product/product.service';
import { MainComponent } from './components/layouts/main/main.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  providers: [
    ProductService
  ]
})
export class CoreModule { }
