import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { catchError, map, Observable } from 'rxjs';
import { Product } from '../classes/Products';

@Injectable({
    providedIn: 'root'
})
export class ProductHttpService {
    private _url: string = "/datasets/products.json";

    constructor(private _http: HttpClient) { }
    getProductList(): Observable<Product[]> {
        return this._http.get<Product[]>(this._url)
    }
}
