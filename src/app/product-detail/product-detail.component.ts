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


    // La chiamata a un'observable è asincrona, pertanto se vuoi lavorare con i dati che ti restituisce
    // l'observable devi farlo all'interno del subscribe. Per evitare di scrivere troppo codice
    // all'interno della subscribe, puoi create un metodo come ho fatto qui nell'esempio
    this._productsService.getProducts().subscribe(data => this.onGetProductsSuccess(data));
  }

  /**
   * Questo metodo viene eseguito quando i dati sono stati recuperati dal server
   * (nel nostro caso dal file .json)
   * @param data Product data
   */
  private onGetProductsSuccess(data: IProduct[]): void {
    this.products = data;
    console.log(this.products);
    const productIdFromRoute = this.getProductId();
    this.product = this.products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  /**
   * Return the product number
   * @returns 
   */
  private getProductId():number {
    const routeParam = this.route.snapshot.paramMap;
    return Number(routeParam.get("productId"));
  }

}
