import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  products = new Observable<Product[]>();
  total = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.cart$;
    this.products.pipe(
      map(products => {
        return products.reduce((ac, cv) => {
          return ac + cv.price;
        }, 0);
      })
    ).subscribe((total: number) => this.total = total);
  }

}
