import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<any> = [];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe(data=> this.products = data);
  }

}
