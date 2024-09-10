import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) {

  }
  addNewCart(model: any) {
  return  this.http.post(environment.baseURL+'carts/add',model)
  }
}
