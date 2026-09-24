import { Component, signal } from '@angular/core';
import { CustomerType } from '../classes/Customers';
import { CustomerHttpService } from '../services/customer-http-service';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  styleUrl: './group-customers.css',
  templateUrl: './group-customers.html',
})
export class GroupCustomers {
  customers = signal<CustomerType[]>([]);
  constructor(private _service: CustomerHttpService) { } //_service: xin 1 ô nhớ, k quá nhiều
  ngOnInit(): void {
    this._service.getCustomerList().subscribe({
      next: (data) => {
        this.customers.set(data);
      },
      error: (err) => {
        alert("Reason:" + JSON.stringify(err));
      }
    }
    )
  }
}
