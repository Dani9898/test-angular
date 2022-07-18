import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from '../products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;
  // products: IProduct[] = [ 
  //   {id: 1, name: "piatto", description: "un bel piatto"},
  //   {id: 2, name: "bicchiere", description: "un bel bicchiere"},
  //   {id: 3, name: "forchetta", description: "una bella forchetta"}
  // ];
  products: IProduct[] = [];

  constructor(private _productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this._productsService.getProducts().subscribe(data => this.products = data);
    console.log(this.products);
    
    const routeParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get("productId"));
    this.product = this.products.find(
      (product) => product.id === productIdFromRoute
    );
    
  }

  getProductId(){
   
  }

}
