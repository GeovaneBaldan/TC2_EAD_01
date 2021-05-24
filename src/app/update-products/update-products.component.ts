import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  @Input() product: Product;

  updateProduct() {
    this.web.updateProduct(this.product, this.product._id).subscribe(result => {
      if (result.ok == true) {
        alert("Product successfully updated!");
      } else {
        alert("An error has occurred and your product has not been updated!");
      }
    });
  }

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

}
