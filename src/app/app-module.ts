import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Contact } from './chuong-1-2/contact/contact';
import { BindingPropertyComponent } from './chuong-1-2/binding/binding-property-component/binding-property-component';
import { BindingClassComponent } from './chuong-1-2/binding/binding-class-component/binding-class-component';
import { BindingStyleComponent } from './chuong-1-2/binding/binding-style-component/binding-style-component';
import { BindingEventComponent } from './chuong-1-2/binding/binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './chuong-1-2/binding/binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './chuong-3/product-list-component/product-list-component';
import { ProductDropdownListComponent } from './chuong-3/product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './chuong-3/product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './chuong-3/product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './chuong-3/product-http-handle-error-service-component/product-http-handle-error-service-component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceProductImageEvent } from './chuong-3/ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './chuong-3/ex13/service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './chuong-3/ex14/catalog-component/catalog-component';
import { GroupCustomers } from './chuong-3/ex18/group-customers/group-customers';
import { ProductDetailComponent } from './chuong-4/product-detail-component/product-detail-component';
import { ProductListAdvancedComponent } from './chuong-4/product-list-advanced-component/product-list-advanced-component';
import { ProductListSearchComponent } from './chuong-4/product-list-search-component/product-list-search-component';
import { PageNotFoundComponent } from './chuong-4/page-not-found-component/page-not-found-component';
import { CourseRegistrationComponent } from './chuong-5/course-registration-component/course-registration-component';
import { CourseRegistrationReactiveComponent } from './chuong-5/course-registration-reactive-component/course-registration-reactive-component';
import { LoginComponent } from './chuong-5/login-component/login-component';
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

@NgModule({
  declarations: [
    App,
    Contact,
    BindingPropertyComponent,
    BindingClassComponent,
    BindingStyleComponent,
    BindingEventComponent,
    BindingTwoWayComponent,
    Homework,
    ProductListComponent,
    ProductDropdownListComponent,
    ProductListCallServiceComponent,
    ProductListCallHttpServiceComponent,
    ProductHttpHandleErrorServiceComponent,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    CatalogComponent,
    GroupCustomers,
    ProductDetailComponent,
    ProductListAdvancedComponent,
    ProductListSearchComponent,
    PageNotFoundComponent,
    CourseRegistrationComponent,
    CourseRegistrationReactiveComponent,
    LoginComponent,
    FakeProductComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent,
    BookDeleteComponent,
    FashionComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
