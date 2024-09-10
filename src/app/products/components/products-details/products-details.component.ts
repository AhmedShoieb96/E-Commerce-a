import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit  {
  id: any;
  loading: Boolean = false;
  productDetails: any = {};
  constructor(private route:ActivatedRoute , private proService :ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id");
}
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.loading = true;
    this.proService.getProductDetails(this.id).subscribe((res: any) => {
      this.productDetails = res;
      this.loading = false;

    })
  }
}
