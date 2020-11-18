import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: { option: string, link: string }[] = [
    { option: 'Productos', link: '/products' },
    { option: 'Contáctenos', link: '/contact' },
  ];

  menuOpened = false;

  total$ = new Observable<number>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

}
