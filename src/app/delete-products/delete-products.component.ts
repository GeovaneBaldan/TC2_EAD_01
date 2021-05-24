import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { WebService } from '../web.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  @Input() product: Product;
  
  removeProduct() {
    this.web.deleteProduct(this.product._id).subscribe(result => {
      if (result) {
        alert("Product successfully deleted!");
      } else {
        alert("An error has occurred and your product has not been deleted!");
      }
    });
  }

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

}
