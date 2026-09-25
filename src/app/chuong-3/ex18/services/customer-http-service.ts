import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError, map } from 'rxjs';
import { CustomerType } from '../classes/Customers';

@Injectable({
    providedIn: 'root'
})
export class CustomerHttpService {
    private _url: string = "/datasets/customers.json";

    constructor(private _http: HttpClient) { }
    getCustomerList(): Observable<CustomerType[]> {
        return this._http.get<CustomerType[]>(this._url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            )
    }
    handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message));
    }
}
