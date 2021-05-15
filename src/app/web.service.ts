import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = "https://banco-dados-teste.glitch.me/api";
  
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL + '/produtos');
  }

  setProduct(product): Observable<any> {
    let reqBody = new HttpParams();
    reqBody = reqBody.set("title", product.title);
    reqBody = reqBody.set("price", String(product.price));
    reqBody = reqBody.set("description", product.description);

    return this.httpClient.post(this.baseURL + "/produtos", reqBody, { observe: "response" });
  }

  updateProduct() {

  }

  deleteProduct() {
    
  }

  constructor(private httpClient: HttpClient) { }
}
