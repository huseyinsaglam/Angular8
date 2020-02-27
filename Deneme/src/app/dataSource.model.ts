import { Product } from './product.model';

export class SimpleDataSource {

     // private products: Product[]
    /*
    constructor() {
        this.products = new Array<Product>(

            new Product(1, "Samsung", "Android1", 2000),
            new Product(2, "Sony", "Android2", 3000),
            new Product(3, "Iphone", "Mac", 4000),
            new Product(4, "Turkcell", "Android3", 5000)
        );
    }
    */


   private products: Product[] = [
       { id : 1 , name : "Samsung" , description : "Android1" , price : 1000},
       { id : 2 , name : "Sony" , description : "Android2" , price : 2000},
       { id : 3 , name : "Iphone" , description : "Mac" , price : 3000},
       { id : 4 , name : "Turkcell" , description : "Android3" , price : 4000}
   ]

   constructor() { 

            this.products = this.products;
   }

   getProducts():Product[] {
       return this.products;

   }

   

 
} 