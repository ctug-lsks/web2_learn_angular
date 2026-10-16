import { Component, signal } from '@angular/core';
import { IFakeProduct } from '../../classes/IFakeProduct';
import { FakeProductService } from '../../services/fake-product-service';

@Component({
  selector: 'app-fake-product-component',
  standalone: false,
  styleUrl: './fake-product-component.css',
  templateUrl: './fake-product-component.html',
})
export class FakeProductComponent {
  products = signal<IFakeProduct[]>([])
  errMessage = signal('')
  constructor(private _service: FakeProductService) {
  }
  ngOnInit(): void {
    this._service.getFakeProductData().subscribe({
      next: (data) => { this.products.set(data) },
      error: (err) => {
        this.errMessage.set(err?.message || String(err))
      }
    })
  }
}
