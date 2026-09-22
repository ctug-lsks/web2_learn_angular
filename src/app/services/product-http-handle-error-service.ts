import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, retry, catchError, throwError} from 'rxjs';
import { Product } from '../classes/Products';

@Injectable({
    providedIn: 'root'
})
export class ProductHttpHandleErrorService {
    private _url: string = "/datasets/products.json";

    constructor(private _http: HttpClient) { }
    getProductList(): Observable<Product[]> {
        return this._http.get<Product[]>(this._url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            )
}
    handleError(error: HttpErrorResponse) {
        return throwError(()=> new Error(error.message));
    }
}
