import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct } from '../products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct | undefined;
  products: IProduct[] = [];

  constructor(private _productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

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
    const productIdFromRoute = this.getProductId();
    this.product = this.products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  /**
   * Return the product number
   * @returns 
   */
  private getProductId(): number {
    return Number(this.route.snapshot.paramMap.get('productId'))
  }

  goPrevious() {
    let previousId = this.getProductId() - 1
    if (previousId === 0)
      previousId = this.products.length;

    this.router.navigate([`../${this.route.snapshot.url[0].path}/${previousId}`], { relativeTo: this.route.parent })
    this.product = this.products.find(product => product.id === previousId)
  }
  goNext() {
    let nextId = this.getProductId() + 1
    if (nextId > this.products.length)
      nextId = 1;
    this.router.navigate([`../${this.route.snapshot.url[0].path}/${nextId}`], { relativeTo: this.route.parent })
    this.product = this.products.find(product => product.id === nextId)
  }
  goBack() {
    this.router.navigate(["../"], { relativeTo: this.route })
  }


}



