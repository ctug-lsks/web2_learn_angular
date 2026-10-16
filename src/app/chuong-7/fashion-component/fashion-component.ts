import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../../services/fashion-apiservice';
import { createSlug } from '../../classes/SlugHelper';

@Component({
  selector: 'app-fashion-component',
  standalone: false,
  templateUrl: './fashion-component.html',
  styleUrl: './fashion-component.css',
})
export class FashionComponent {
  fashions = signal<Fashion[]>([]);
  errMessage = signal('');
  public generateSlug = createSlug;

  constructor(
    public _service: FashionAPIService,
    private router: Router
  ) {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions.set(data);
      },
      error: (err) => {
        this.errMessage.set(err?.message || JSON.stringify(err));
      },
    });
  }

  // Điều hướng xem chi tiết bằng ID
  viewDetail(id: number | string) {
    this.router.navigate(['/fashion-detail', id]);
  }

  // Điều hướng xem chi tiết bằng Slug SEO
  viewDetailSlug(fashion: Fashion) {
    const slug = this.generateSlug(fashion.fashion_subject, fashion.IdF);
    this.router.navigate(['/fashion-detail', slug]);
  }

  getImageSrc(fashion: Fashion): string {
    if (!fashion.fashion_image) return '';
    if (fashion.fashion_image.startsWith('data:image')) {
      return fashion.fashion_image;
    }
    return 'data:image/jpeg;base64,' + fashion.fashion_image;
  }
}
