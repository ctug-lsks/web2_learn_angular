import { Component, signal } from '@angular/core';
import { ProductHttpHandleErrorService } from '../../services/product-http-handle-error-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../classes/Products';
import { createSlug } from '../../classes/SlugHelper';

@Component({
  selector: 'app-product-list-advanced-component',
  standalone: false,
  styleUrl: './product-list-advanced-component.css',
  templateUrl: './product-list-advanced-component.html',
})
export class ProductListAdvancedComponent {
  products = signal<Product[] | null>(null);
  errMessage = signal("")
  public generateSlug = createSlug;
  constructor(private _service: ProductHttpHandleErrorService,
    private router: Router, //điều hướng qua trang khác
    private activateRoute: ActivatedRoute) // lấy dữ liệu từ router khác (trang khác)
  {
  }
  ngOnInit(): void {
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (err) => {
        alert("Reason:" + JSON.stringify(err));
      }
    }
    )
  }
  viewDetail(id: number) {
    this.router.navigate(["/product", id]);
  }
  viewDetailSlug(p: Product) {
    let slug = this.generateSlug(p.name, p.id)
    this.router.navigate(["/product", slug])
  }

}
