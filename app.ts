import { ProductService } from "./ProductService"
import { Product } from "./product";

let _productService = new ProductService()

// If I want to bring the product with ID number 2
let getProductByID2 = _productService.getById(2);
console.log(getProductByID2);

// If I want to add product
let nintendo = new Product();
nintendo.name = "Nintendo Switch";
nintendo.category = "Console";
nintendo.price = 37000;
_productService.saveProduct(nintendo);

// If I want to delete product
_productService.deleteProduct(nintendo);

// If I want to update product


// all products
let allProducts: Array<Product>;
allProducts = _productService.getProducts();
console.log(allProducts);


