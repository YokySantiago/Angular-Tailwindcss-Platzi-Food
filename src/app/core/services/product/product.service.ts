import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Combo Hamburguesa Doble',
      description: 'Hamburguesa 100% de res con 2 carnes (115 gr), papas y bebida a elección',
      price: 22700,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      id: 2,
      name: 'Combo Sencilla',
      description: 'Hamburguesa 100% carne de res (115 gr), papas home y bebida a elección.',
      price: 18700,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2848&q=80&w=500&h=500'
    },
    {
      id: 3,
      name: 'Combo Hamburguesa Veggie',
      description: 'Hamburguesa vegetariana de champiñón portobello apanada rellena de queso, con tomate, lechuga, salsas',
      price: 22700,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80&w=500&h=500'
    },
    {
      id: 4,
      name: 'Pollo apanado completo',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 35000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80&w=500&h=500'
    },
    {
      id: 5,
      name: 'Papas fritas',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 5000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1530805948738-95aa20739233?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80&w=500&h=500'
    },
    {
      id: 6,
      name: 'Perro caliente sencillo',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 7000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1515875976234-9d59c3ef288d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80&w=500&h=500'
    },
    {
      id: 7,
      name: 'Pizza artesanal',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 15000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1594179047513-b4199480fe9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80&w=500&h=500'
    },
    {
      id: 8,
      name: 'Haburguesa con queso',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 17000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80'
    },
    {
      id: 9,
      name: 'Haburguesa con queso',
      description: 'Hamburguesa con queso y aderezo de chipotle',
      price: 17000,
      reviewCount: 36,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80'
    },
  ];

  constructor() { }

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }
}
