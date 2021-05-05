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
    this.web.setProduct(this.product).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
