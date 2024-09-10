import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  totalPrice: number = 0;
  TotalcartProducts: number = 0;
  active: boolean = false;
  constructor(private service: CartsService) {}
  ngOnInit(): void {
    this.addToCart();
    this.getTotalCartPrice();
    this.getTotalcartProducts();
  }
  addToCart() {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cart);
    }
  }
  getTotalCartPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      this.totalPrice += this.cart[i].item.price * this.cart[i].itemNum;
    }
  }
  getTotalcartProducts() {
    this.TotalcartProducts = this.cart.length;
  }
  addNum(index: number) {
    this.cart[index].itemNum++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalCartPrice();
  }
  minNum(index: number) {
    this.cart[index].itemNum--;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalCartPrice();
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  deleteProduct(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  deleteAll() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalCartPrice();
  }
  sendDataToBackEnd() {

    let products = this.cart.map((pro) => {
      return { id: pro.id, quantity: pro.itemNum };
    });
    let model = {
      userId: 1,
      products: products,
    };
    this.service.addNewCart(model).subscribe((res: any) => {
      this.active = true;
    });
    console.log(model);
  }
}
