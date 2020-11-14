import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: {option: string, link: string}[] = [
    {option: 'Productos', link: '/products'},
    {option: 'Contáctenos', link: '/contact'},
  ];

  menuOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
