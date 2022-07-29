import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInventorComponent } from './product-inventor/product-inventor.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // Soluzione 1
  // {path: '', component: ProductsComponent},

  // Soluzione 2
  {path: '', redirectTo:'/products', pathMatch:'full'},
  {path: 'products', component: ProductsComponent},

  {
    path: 'products/:productId',
    component: ProductDetailComponent,
    // children: [
    //   {path: 'inventor', component: ProductInventorComponent}
    // ]
  },
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
