import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './chuong_3/product-list-component/product-list-component';
import { ProductDropdownListComponent } from './chuong_3/product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './chuong_3/product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './chuong_3/product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './chuong_3/product-http-handle-error-service-component/product-http-handle-error-service-component';


const routes: Routes = [
  { path: 'learn_directive', component: ProductListComponent },
  { path: 'learn_dropdown', component: ProductDropdownListComponent },
  { path: "product_list_call_service", component: ProductListCallServiceComponent },
  { path: "product_list_call_http_service", component: ProductListCallHttpServiceComponent },
  { path: "product_http_handle_error", component: ProductHttpHandleErrorServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
