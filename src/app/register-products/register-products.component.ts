import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styleUrls: ['./register-products.component.css']
})
export class RegisterProductsComponent implements OnInit {

  product: {
    title: '',
    price: 0,
    description: '' 
  }

  constructor(private web: WebService) { }

  registerProduct() {
    this.web.registerProduct(this.product).subscribe(result => {
      if (result.ok == true) {
        alert("Product successfully registered!");
      } else {
        alert("An error has occurred and your product has not been registered!");
      }
    });
  }

  ngOnInit(): void {
  }

}
