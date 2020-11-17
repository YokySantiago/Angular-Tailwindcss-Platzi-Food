import { Component, OnInit } from '@angular/core';

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

  total = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => {
      this.total = products.length;
    });
  }

}
