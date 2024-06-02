import { Product } from "./product";

export class SimpleDataSource {
    private products: Array<Product>

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Iphone 14 Pro", "Phone", 75000),
            new Product(2, "Samsung Galaxy S22", "Phone", 42321),
            new Product(3, "Macbook Pro M2", "Computer", 91000),
            new Product(4, "PS5", "Console", 12650),
            new Product(5, "Monster Notebook", "Computer", 35000)
        )
    };

    getProducts(): Array<Product> {
        return this.products
    };
}