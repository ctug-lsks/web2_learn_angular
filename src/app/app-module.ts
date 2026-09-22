import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Homework } from './homework/homework';
import { FormsModule } from '@angular/forms';
import { Contact } from './chuong_1_2/contact/contact';
import { BindingPropertyComponent } from './chuong_1_2/binding/binding-property-component/binding-property-component';
import { BindingClassComponent } from './chuong_1_2/binding/binding-class-component/binding-class-component';
import { BindingStyleComponent } from './chuong_1_2/binding/binding-style-component/binding-style-component';
import { BindingEventComponent } from './chuong_1_2/binding/binding-event-component/binding-event-component';
import { BindingTwoWayComponent } from './chuong_1_2/binding/binding-two-way-component/binding-two-way-component';
import { ProductListComponent } from './chuong_3/product-list-component/product-list-component';
import { ProductDropdownListComponent } from './chuong_3/product-dropdown-list-component/product-dropdown-list-component';
import { ProductListCallServiceComponent } from './chuong_3/product-list-call-service-component/product-list-call-service-component';
import { ProductListCallHttpServiceComponent } from './chuong_3/product-list-call-http-service-component/product-list-call-http-service-component';
import { ProductHttpHandleErrorServiceComponent } from './chuong_3/product-http-handle-error-service-component/product-http-handle-error-service-component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule { }
