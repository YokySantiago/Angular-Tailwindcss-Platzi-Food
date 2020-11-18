import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../core/interfaces/product';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  detail(id: number): void {
    this.router.navigate(['/products', id]);
  }

}
