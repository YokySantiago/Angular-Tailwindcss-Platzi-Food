import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../../../services/product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = parseInt(params.id)
      this.product = this.productService.getOne(id)
      console.info(this.product)
    })
  }

}
