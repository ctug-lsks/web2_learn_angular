import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../classes/Products';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  minPrice: number = 0;
  maxPrice: number = 100;

  // Way 1
  products: Product[] = []
  constructor(private ps: ProductService) { }
  ngOnInit(): void {
    this.products = this.ps.getProducts()
  }
  //Way 2: Vẫn chạy nhma sẽ có trường hợp k hiển thị hết ở giao diện
  // products: Product[] = []
  // constructor(private ps: ProductService) {
  //   this.products=this.ps.getProducts()
  // }
  doFilterbyPrice() {
    this.products = this.ps.getProducts()
      .filter(p => p.price >= this.minPrice && p.price <= this.maxPrice)
  }
}
