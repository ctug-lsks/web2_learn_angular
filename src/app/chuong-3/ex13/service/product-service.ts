import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProductService {
    productsImage = [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://tse4.mm.bing.net/th/id/OIP.j4F-BO4DX4DbDV5MT09NCgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://tse4.mm.bing.net/th/id/OIP.bwYMUBdIp_zM11Sb6UVv_gHaHa?r=0&w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://egrocery.asia/wp-content/uploads/2017/10/red-sting-energy-drink-can.jpg" },
    ]
    constructor() { }
    getProductsWithImages() {
        return this.productsImage
    }
    getProductDetail(id: any) {
        return this.productsImage.find(x => x.ProductId == id)
    }
}
