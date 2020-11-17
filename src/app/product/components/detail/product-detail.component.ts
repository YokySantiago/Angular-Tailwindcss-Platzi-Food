import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../core/interfaces/product';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = parseInt(params.id, 10);
      this.product = this.productService.getOne(id);
    });
  }

  /**
   * Allow add a product to cart
   *
   * @author Santiago Botero Ruiz
   */
  addProduct(): void {
    this.cartService.addProduct(this.product);
  }

}
