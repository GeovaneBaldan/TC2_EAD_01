import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productList: Product[];
  upProd: Product;
  deleteProd: Product;

  constructor(private web: WebService) { }

  loadProducts(): void {
    this.web.getProducts().subscribe(result => {
      this.productList = result;
    });
  }

  updateProduct(index: number) {
    this.upProd = this.productList[index];
  }

  removeProduct(index: number) {
    this.deleteProd = this.productList[index];
  }

  ngOnInit(): void {
    this.loadProducts();
  }

}
