import { Product } from './product.model';
import { SimpleDataSource } from './dataSource.model';

export class ProductRepository{


    private products : Product[]
    private dataSource : SimpleDataSource[]

    constructor()
    {
        this.getProducts().forEach(p=> this.products.push(p))
        
    }

    getProducts():Product[]
    {
       return this.products
    }

    getProductsId(id:number): Product{
        return this.products.find(p=> p.id == id)
    }

  

}