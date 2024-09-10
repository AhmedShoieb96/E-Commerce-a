import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(environment.baseURL + 'products');
  }
  getProductCategory() {
    return this.http.get(environment.baseURL + 'products/category-list');
  }
  getProductByCategory(keyword: string) {
    return this.http.get(environment.baseURL + 'products/category/' + keyword);
  }
  getProductDetails(id:string) {
    return this.http.get(environment.baseURL + 'products/'+ id);
  }
}
