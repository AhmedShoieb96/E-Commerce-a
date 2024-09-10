import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;
  cart: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.products);
    this.getProductCategory();
    console.log(this.categories);
  }
  getAllProducts() {
    this.loading = true;
    return this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.products;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  getProductCategory() {
    this.loading = true;
    return this.service.getProductCategory().subscribe(
      (resolve: any) => {
        this.categories = resolve;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;

    if (value == 'All') {
      this.getAllProducts();
      console.log(value);
    } else {
      this.getProductByCategory(value);
      console.log(value);
    }
  }
  getProductByCategory(keyword: string) {
    this.loading = true;
    this.service.getProductByCategory(keyword).subscribe(
      (resolve: any) => {
        this.products = resolve.products;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cart.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert('this product is already exist');
      } else {
        this.cart.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    } else {
      this.cart.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
