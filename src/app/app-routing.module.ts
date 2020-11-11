import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/layouts/main/main.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
