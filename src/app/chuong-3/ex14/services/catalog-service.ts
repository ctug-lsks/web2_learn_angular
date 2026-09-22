import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    datas = [
        {
            "Cateid": "cate1", "CateName": "nuoc ngot",
            "Products": [
                { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://tse4.mm.bing.net/th/id/OIP.j4F-BO4DX4DbDV5MT09NCgHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
                { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://tse4.mm.bing.net/th/id/OIP.bwYMUBdIp_zM11Sb6UVv_gHaHa?r=0&w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3" },
                { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://egrocery.asia/wp-content/uploads/2017/10/red-sting-energy-drink-can.jpg" }
            ]
        },
        {
            "Cateid": "cate2", "CateName": "Bia",
            "Products": [
                {
                    "ProductId": "p4", "ProductName": "Heleiken", "Price": 500,
                    "Image": "https://hporro.com/wp-content/uploads/2022/04/Heineken-Silver-Distribuciones-Porro.jpg"
                },
                {
                    "ProductId": "p5", "ProductName": "333", "Price": 400,
                    "Image": "https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8935012443397-1.jpg.webp"
                },
                {
                    "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600,
                    "Image": "https://nld.mediacdn.vn/291774122806476800/2023/1/31/chi-sau-9-thang-sabeco-da-gan-can-dich-ke-hoach-loi-nhuan-ca-nam-2022-220221024181757-16751435791691872712826.jpg"
                },
            ]
        },
    ]
    constructor() { }
    getCategories() {
        return this.datas
    }
} 
