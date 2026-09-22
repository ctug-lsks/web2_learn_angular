import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
