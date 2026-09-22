import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-component',
  standalone: false,
  styleUrl: './catalog-component.css',
  templateUrl: './catalog-component.html',
})
export class CatalogComponent {
  public products: any
  constructor(pservice: CatalogService, private router: Router) {
    this.products = pservice.getCategories()
  }
}
