import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './chuong-3/product-list-component/product-list-component';
import { ProductDropdownListComponent } from './chuong-3/product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './chuong-3/product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './chuong-3/product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './chuong-3/product-http-handle-error-service-component/product-http-handle-error-service-component';
import { ServiceProductImageEvent } from './chuong-3/ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './chuong-3/ex13/service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './chuong-3/ex14/catalog-component/catalog-component';
import { GroupCustomers } from './chuong-3/ex18/group-customers/group-customers';
import { ProductDetailComponent } from './chuong-4/product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './chuong-4/product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './chuong-4/product-list-search-component/product-list-search-component';
import { PageNotFoundComponent } from './chuong-4/page-not-found-component/page-not-found-component';
import { Contact } from './chuong-1-2/contact/contact';
import { authGuard } from './classes/auth.guard';
import { CourseRegistrationComponent } from './chuong-5/course-registration-component/course-registration-component';
import { LoginComponent } from './chuong-5/login-component/login-component';
import { CourseRegistrationReactiveComponent } from './chuong-5/course-registration-reactive-component/course-registration-reactive-component';
import { FakeProductComponent } from './chuong-6/fake-product-component/fake-product-component';
import { BooksComponent } from './chuong-6/books-component/books-component';
import { BookDetailComponent } from './chuong-6/book-detail-component/book-detail-component';
import { BookNewComponent } from './chuong-6/book-new-component/book-new-component';
import { BookUpdateComponent } from './chuong-6/book-update-component/book-update-component';
import { BookDeleteComponent } from './chuong-6/book-delete-component/book-delete-component';
import { FashionComponent } from './chuong-7/fashion-component/fashion-component';
import { FashionDetailComponent } from './chuong-7/fashion-detail-component/fashion-detail-component';
import { FashionNewComponent } from './chuong-7/fashion-new-component/fashion-new-component';
import { FashionUpdateComponent } from './chuong-7/fashion-update-component/fashion-update-component';

const routes: Routes = [
  { path: 'learn_directive', component: ProductListComponent },
  { path: 'learn_dropdown', component: ProductDropdownListComponent },
  { path: "product_list_call_service", component: ProductListCallServiceComponent },
  { path: "product_list_call_http_service", component: ProductListCallHttpServiceComponent },
  { path: "product_http_handle_error", component: ProductHttpHandleErrorServiceComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEvent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetail },
  { path: 'catalog', component: CatalogComponent },
  { path: 'group-customers', component: GroupCustomers },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "products", component: ProductListAdvancedComponent },
  { path: "search-product", component: ProductListSearchComponent },
  { path: "contact", component: Contact },
  { path: "course-register", component: CourseRegistrationComponent },
  { path: "course-reactive-register", component: CourseRegistrationReactiveComponent },
  { path: "login", component: LoginComponent },
  { path: "fake-product", component: FakeProductComponent },
  { path: "book-list", component: BooksComponent },
  { path: "book-detail", component: BookDetailComponent },
  { path: "book-new", component: BookNewComponent },
  { path: "book-update", component: BookUpdateComponent },
  { path: "book-delete", component: BookDeleteComponent },
  { path: "fashion-list", component: FashionComponent },
  { path: "fashion-detail", component: FashionDetailComponent },
  { path: "fashion-detail/:id", component: FashionDetailComponent },
  { path: "fashion-new", component: FashionNewComponent },
  { path: "fashion-update", component: FashionUpdateComponent },
  { path: "", component: Contact },
  {
    path: "samplenested", component: ProductListAdvancedComponent,
    children: [
      { path: 'search', component: ProductListSearchComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
    ]
  },
  {
    path: "lazyinfo",
    loadComponent: () => import("./chuong-4/lazy-component/lazy-component")
      .then(c => c.LazyComponent),
    canActivate: [authGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
