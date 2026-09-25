export interface Customer { //lưu ý: datasets và classes ở ngoài app
    Id: string;
    Name: string;
    Email: string;
    Age: number;
    Image: string;
}

export interface CustomerType {
    CustomerTypeId: number;
    CustomerTypeName: string;
    CustomterTypeName?: string;
    Customers: Customer[];
}