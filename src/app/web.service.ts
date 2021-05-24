import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseURL = 'https://banco-dados-teste.glitch.me/api/produtos';
  
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseURL);
  }

  registerProduct(product): Observable<any> {
    let reqBody = new HttpParams();
    reqBody = reqBody.set('title', product.title);
    reqBody = reqBody.set('price', String(product.price));
    reqBody = reqBody.set('description', product.description);

    return this.httpClient.post(this.baseURL, reqBody, { observe: 'response' });
  }

  updateProduct(product, id: string): Observable<any> {
    let reqUrl = this.baseURL + `/${id}`;
    let reqBody = new HttpParams();

    reqBody = reqBody.set('title', product.title);
    reqBody = reqBody.set('price', String(product.price));
    reqBody = reqBody.set('description', product.description);

    return this.httpClient.put(reqUrl, reqBody, { observe: 'response' });
  }

  deleteProduct(id: string): Observable<unknown> {
    let reqUrl = this.baseURL + `/${id}`;

    return this.httpClient.delete(reqUrl, { observe: 'response' }); 
  }

  constructor(private httpClient: HttpClient) { }
}
