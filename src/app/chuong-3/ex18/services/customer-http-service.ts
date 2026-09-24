import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerType } from '../classes/Customers';

@Injectable({
    providedIn: 'root'
})
export class CustomerHttpService {
    private _url: string = "/datasets/customers.json";

    constructor(private _http: HttpClient) { }
    getCustomerList(): Observable<CustomerType[]> {
        return this._http.get<CustomerType[]>(this._url);
    }
}
