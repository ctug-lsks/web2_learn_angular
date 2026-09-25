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
  { path: "", component: Contact },
  {
    path: "samplenested", component: ProductListAdvancedComponent,
    children: [
      { path: 'search', component: ProductListSearchComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
