import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../../services/fashion-apiservice';
import { extractIdFromSlug, getIdentityType, createSlug } from '../../classes/SlugHelper';

@Component({
  selector: 'app-fashion-detail-component',
  standalone: false,
  templateUrl: './fashion-detail-component.html',
  styleUrl: './fashion-detail-component.css',
})
export class FashionDetailComponent implements OnInit {
  fashion = signal<Fashion | null>(null);
  errMessage = signal('');
  loading = signal(false);
  currentSearchTerm = signal('');

  public checkIdentityType = getIdentityType;
  public getIdFromSlug = extractIdFromSlug;
  public generateSlug = createSlug;

  constructor(
    private _service: FashionAPIService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((param) => {
      const idParam = param.get('id');
      if (idParam) {
        this.currentSearchTerm.set(idParam);
        this.analyzeAndLoadFashion(idParam);
      }
    });
  }

  analyzeAndLoadFashion(identityParam: string) {
    if (!identityParam || !identityParam.trim()) {
      return;
    }

    const trimmed = identityParam.trim();
    this.currentSearchTerm.set(trimmed);
    this.loading.set(true);
    this.errMessage.set('');
    this.fashion.set(null);

    // 1. Phân tích loại định danh bằng SlugHelper
    const identityType = this.checkIdentityType(trimmed);
    let searchKey: string | number | null = null;

    switch (identityType) {
      case 'ID':
        // Người dùng nhập/chọn thẳng IdF (ví dụ: /fashion-detail/1)
        searchKey = parseInt(trimmed, 10);
        break;

      case 'SLUG_WITH_ID':
        // Người dùng click Slug chuẩn SEO (ví dụ: /fashion-detail/ten-bai-viet-p1)
        searchKey = this.getIdFromSlug(trimmed);
        break;

      case 'PURE_SLUG':
        // Trường hợp là từ khóa trong slug (ví dụ: "Anne", "milan", "paris") hoặc ObjectId
        searchKey = trimmed;
        break;
    }

    if (searchKey === null) {
      this.loading.set(false);
      this.errMessage.set(`Không thể bóc tách thông tin từ chuỗi: "${trimmed}"`);
      return;
    }

    // 2. Gọi Service lấy dữ liệu Fashion từ Backend MongoDB
    this._service.getFashion(searchKey).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (data) {
          const fashionInstance = Object.assign(new Fashion(), data);
          this.fashion.set(fashionInstance);
        } else {
          this.errMessage.set(`Không tìm thấy bài viết thời trang nào phù hợp với từ khóa "${trimmed}".`);
        }
      },
      error: (err) => {
        this.loading.set(false);
        this.errMessage.set(err?.message || JSON.stringify(err));
      },
    });
  }

  searchFashion(inputVal: string) {
    if (inputVal && inputVal.trim()) {
      const trimmed = inputVal.trim();
      this.analyzeAndLoadFashion(trimmed);
      this.router.navigate(['/fashion-detail', trimmed]);
    }
  }

  goBack() {
    this.router.navigate(['/fashion-list']);
  }

  getImageSrc(fashion: Fashion | null): string {
    if (!fashion || !fashion.fashion_image) return '';
    if (fashion.fashion_image.startsWith('data:image')) {
      return fashion.fashion_image;
    }
    return 'data:image/jpeg;base64,' + fashion.fashion_image;
  }
}
