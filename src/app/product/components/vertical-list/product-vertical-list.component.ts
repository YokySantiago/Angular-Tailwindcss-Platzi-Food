import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-product-vertical-list',
  templateUrl: './product-vertical-list.component.html',
  styleUrls: ['./product-vertical-list.component.scss']
})
export class VerticalListComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
